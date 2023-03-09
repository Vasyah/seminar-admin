import React, { FC } from "react";
import { Button, IconButton, Tooltip } from "@pankod/refine-mui";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { IUser } from "../../../interfaces";
import { RegistrationApi } from "../../api/registrationApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IRegistrationButton {
  user: IUser;
}

export const RegistrationButton: FC<IRegistrationButton> = (
  props: IRegistrationButton
) => {
  const { user } = props;

  const successNotify = () =>
    toast("Письмо регистрации успешно отправлено", { type: "success" });

  const errorNotify = () =>
    toast(
      "Ошибка при отправке письма, попробуйте еще раз, возможно какие-то проблемы с сервером",
      { type: "error" }
    );

  const sendEmail = () => {
    try {
      RegistrationApi.sendRegistrationEmail(user).then(() => {
        RegistrationApi.updatePayment(user);
        successNotify();
      });
    } catch (e) {
      errorNotify();
    }
  };
  return (
    <Tooltip title={"Отправить письмо регистрации"}>
      <IconButton size={"small"} onClick={sendEmail} color={"primary"}>
        <MailOutlineIcon />
      </IconButton>
    </Tooltip>
  );
};
