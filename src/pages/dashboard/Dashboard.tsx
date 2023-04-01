import React, { FC } from "react";
import { useApiUrl, useCustom } from "@pankod/refine-core";
import { IUser } from "../../interfaces";
import { Avatar, Grid, Stack } from "@pankod/refine-mui";
import GroupIcon from "@mui/icons-material/Group";
import PaymentsIcon from "@mui/icons-material/Payments";
import GrassIcon from "@mui/icons-material/Grass";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import { ThemedSpinner } from "../../components/Spinner/Spinner";
import styled from "styled-components";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import {
  breakpointsNum,
  useWindowSize,
  WindowSize,
} from "../../hooks/useWindowSize";

export interface IDashboard {}

const MetricContainer = styled.div`
  padding: 16px;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
`;
export const Dashboard: FC<IDashboard> = (props: IDashboard) => {
  const apiUrl = useApiUrl();
  const size = useWindowSize();
  const { data, isLoading } = useCustom<IUser[]>({
    url: `${apiUrl}/users`,
    method: "get",
  });
  const users = data?.data ?? [];

  const usersCount = users.length;
  const payedCount = users.filter((user) => user.isPaymentEmailSent).length;
  const veganCount = users.filter((user) => user.isVegan).length;
  const teachersCount = users.filter(
    (user) => user.status === "Учитель"
  ).length;

  function groupBy<T>(key: keyof T) {
    return function group(array: T[]) {
      return array.reduce((acc, obj) => {
        const property = obj[key];
        // @ts-ignore
        acc[property] = acc[property] || [];
        // @ts-ignore
        acc[property].push(obj);
        return acc;
      }, {} as { [key: string]: IUser[] });
    };
  }

  const groupedUsersByTown = groupBy<IUser>("town")(users);
  const chartData: { name: string; value: number }[] = Object.entries(
    groupedUsersByTown
  ).map(([town, users]) => ({
    name: town,
    value: users.length,
  }));

  if (isLoading) return <ThemedSpinner />;

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#b62929",
    "#6f30ce",
    "#ff8228",
    "#FFBB281",
    "#1440ff",
    "#582c8f",
    "#c726d2",
  ];

  const getChartSize = (size: WindowSize) => {
    switch (size) {
      case WindowSize.XS:
        return breakpointsNum.xs;
      case WindowSize.SM:
        return breakpointsNum.xs;
      case WindowSize.MD:
        return breakpointsNum.sm;
      case WindowSize.LG:
        return breakpointsNum.md;
      case WindowSize.XL:
        return breakpointsNum.lg;
      default:
        return breakpointsNum.md;
    }
  };

  const chartSize = getChartSize(size);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <MetricContainer>
          <Stack direction={"column"} alignItems={"center"}>
            <b>Количество участников&nbsp;</b>
            <Avatar sx={{ bgcolor: "#9966CC" }}>
              <GroupIcon />
            </Avatar>
            <>
              <b>{usersCount}</b>
            </>
          </Stack>
        </MetricContainer>
      </Grid>
      <Grid item xs={12} md={6}>
        <MetricContainer>
          <Stack direction={"column"} alignItems={"center"}>
            <b>Количество оплативших&nbsp;</b>
            <Avatar sx={{ bgcolor: "#44944A" }}>
              <PaymentsIcon />
            </Avatar>
            <>
              <b>{payedCount}</b>
            </>
          </Stack>
        </MetricContainer>
      </Grid>
      <Grid item xs={12} md={6}>
        <MetricContainer>
          <Stack direction={"column"} alignItems={"center"}>
            <b>Количество вегетарианцев&nbsp;</b>
            <Avatar sx={{ bgcolor: "#44944A" }}>
              <GrassIcon />
            </Avatar>
            <>
              <b>{veganCount}</b>
            </>
          </Stack>
        </MetricContainer>
      </Grid>
      <Grid item xs={12} md={6}>
        <MetricContainer>
          <Stack direction={"column"} alignItems={"center"}>
            <b>Количество учителей&nbsp;</b>
            <Avatar sx={{ bgcolor: "#e19732" }}>
              <FamilyRestroomIcon />
            </Avatar>
            <>
              <b>{teachersCount}</b>
            </>
          </Stack>
        </MetricContainer>
      </Grid>

      <Grid item md={12} flex={"1"}>
        <Grid justifyContent={"center"} alignItems={"center"} container>
          <PieChart width={chartSize} height={chartSize * 0.5}>
            <Pie
              data={chartData}
              cx={"50%"}
              cy={"50%"}
              innerRadius={chartSize * 0.1}
              outerRadius={chartSize * 0.15}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label={(props) => {
                const town = props.payload;
                return `${town.name}: ${town.value}`;
              }}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Grid>
      </Grid>
    </Grid>
  );
};
