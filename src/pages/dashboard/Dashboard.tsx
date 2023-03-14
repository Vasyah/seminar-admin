import React, { FC } from "react";
import { useApiUrl, useCustom } from "@pankod/refine-core";
import { IUser } from "../../interfaces";
import { Avatar, Grid, Stack } from "@pankod/refine-mui";
import GroupIcon from "@mui/icons-material/Group";
import PaymentsIcon from "@mui/icons-material/Payments";

export interface IDashboard {}

export const Dashboard: FC<IDashboard> = (props: IDashboard) => {
  const apiUrl = useApiUrl();

  const { data, isLoading } = useCustom<IUser[]>({
    url: `${apiUrl}/users`,
    method: "get",
  });
  const users = data?.data ?? [];

  const usersCount = users.length;
  const payedCount = users.filter((user) => user.isPaymentEmailSent).length;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "16px",
            borderRadius: "4px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        >
          <Stack direction={"column"} alignItems={"center"}>
            <b>Количество участников&nbsp;</b>
            <Avatar sx={{ bgcolor: "#9966CC" }}>
              <GroupIcon />
            </Avatar>
            <>
              <b>{usersCount}</b>
            </>
          </Stack>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "16px",
            borderRadius: "4px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        >
          <Stack direction={"column"} alignItems={"center"}>
            <b>Количество оплативших&nbsp;</b>
            <Avatar sx={{ bgcolor: "#44944A" }}>
              <PaymentsIcon />
            </Avatar>
            <>
              <b>{payedCount}</b>
            </>
          </Stack>
        </div>
      </Grid>
    </Grid>
  );
};
