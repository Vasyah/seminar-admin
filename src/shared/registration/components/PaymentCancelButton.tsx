import React, { FC } from "react";
import { IconButton, Tooltip } from "@pankod/refine-mui";
import { IUser } from "../../../interfaces";
import { RegistrationApi } from "../../api/registrationApi";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import CancelIcon from "@mui/icons-material/Cancel";

export interface IPaymentButton {
  user: IUser;
}

export const PaymentCancelButton: FC<IPaymentButton> = (props: IPaymentButton) => {
  const { user } = props;

  const successNotify = () =>
    toast("Оплата отменена", { type: "success" });

  const errorNotify = () =>
    toast(
      "Ошибка при отправке письма, попробуйте еще раз, возможно какие-то проблемы с сервером",
      { type: "error" }
    );

  const sendEmail = () => {
    RegistrationApi.updatePayment(user, false)
      ?.then(() => successNotify())
      .catch((e) => errorNotify());
  };

  return (
    <Tooltip title={"Отменить оплату"}>
      <IconButton size={"small"} onClick={sendEmail} color={"primary"}>
        <CancelIcon />
      </IconButton>
    </Tooltip>
  );
};
