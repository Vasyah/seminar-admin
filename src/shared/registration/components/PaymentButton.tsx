import React, { FC } from "react";
import { IconButton, Tooltip } from "@pankod/refine-mui";
import PaidIcon from "@mui/icons-material/Paid";
import { IUser } from "../../../interfaces";
import { RegistrationApi } from "../../api/registrationApi";
import { getPaymentTemplate } from "../../payment/utils/getPaymentTemplate";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export interface IPaymentButton {
  user: IUser;
}

export const PaymentButton: FC<IPaymentButton> = (props: IPaymentButton) => {
  const { user } = props;
  const successNotify = () =>
    toast("Письмо об оплате успешно отправлено", { type: "success" });

  const errorNotify = () =>
    toast(
      "Ошибка при отправке письма, попробуйте еще раз, возможно какие-то проблемы с сервером",
      { type: "error" }
    );

  const sendEmail = () => {
    try {
      RegistrationApi.sendPaymentEmail(
        user,
        getPaymentTemplate(
          "Мир Человека в Любви Господа",
          "21-23 апреля 2023г.",
          "12:00 21.04",
          "19.04",
          "обед 21.04 - 400р, ужин 23.04 - 350р"
        )
      ).then(() => {
        RegistrationApi.updatePayment(user, true);
        successNotify();
      });
    } catch (e) {
      errorNotify();
    }
  };

  return (
    <Tooltip title={"Отметить оплату"}>
      <IconButton size={"small"} onClick={sendEmail} color={"primary"}>
        <PaidIcon />
      </IconButton>
    </Tooltip>
  );
};
