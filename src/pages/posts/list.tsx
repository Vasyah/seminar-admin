import React from "react";
import { Option, useSelect } from "@pankod/refine-core";
import {
  useDataGrid,
  DataGrid,
  GridColumns,
  List,
  Stack,
  EditButton,
  DeleteButton,
  GridValueFormatterParams,
  Button,
} from "@pankod/refine-mui";
import { IUser } from "../../interfaces";
import { RegistrationButton } from "../../shared/registration/components/RegistrationButton";
import { PaymentButton } from "../../shared/registration/components/PaymentButton";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export const PostList: React.FC = () => {
  const { dataGridProps } = useDataGrid<IUser>({
    liveMode: "auto",
    // hasPagination: false,
  });

  const {
    options,
    queryResult: { isLoading },
  } = useSelect<IUser>({
    resource: "users",
    hasPagination: false,
  });

  const columns = React.useMemo<GridColumns<IUser>>(
    () => [
      {
        field: "index",
        headerName: "№",
        type: "number",
        width: 50,
      },
      {
        field: "name",
        headerName: "ФИО",
        minWidth: 300,
        flex: 1,
        pinnable: true,
        editable: true,
      },
      {
        field: "town",
        headerName: "Город",
        headerAlign: "left",
        align: "left",
        minWidth: 125,
        flex: 0.5,
        valueOptions: options,
        valueFormatter: (params: GridValueFormatterParams<Option>) => {
          return params.value;
        },
        renderCell: function render({ row }) {
          if (isLoading) {
            return "Loading...";
          }

          const category = options.find(
            // @ts-ignore
            (item) => item.value.toString() === row?.id.toString()
          );
          return category?.label;
        },
      },
      {
        field: "birthDate",
        headerName: "Дата Рождения",
        type: "string",
        width: 100,
      },
      {
        field: "phone",
        headerName: "Номер телефона",
        type: "string",
        width: 125,
      },
      {
        field: "teachers",
        headerName: "Учителя",
        type: "string",
        minWidth: 150,
      },
      {
        field: "email",
        headerName: "Email",
        minWidth: 120,
      },
      {
        field: "status",
        headerName: "Status",
        minWidth: 120,
        type: "singleSelect",
        valueOptions: ["Учитель", "Ученик"],
      },
      {
        field: "isVegan",
        headerName: "Веган?",
        type: "boolean",
        minWidth: 50,
      },
      {
        field: "isCar",
        headerName: "На Авто?",
        type: "boolean",
        minWidth: 50,
      },
      {
        field: "isConcert",
        headerName: "Концерт?",
        type: "boolean",
        minWidth: 50,
      },
      {
        field: "isRegistrationsEmailSent",
        headerName: "Письмо регистрации?",
        type: "boolean",
        minWidth: 100,
      },
      {
        field: "isPaymentEmailSent",
        headerName: "Оплата?",
        type: "boolean",
        minWidth: 100,
      },
      {
        field: "actions",
        type: "actions",
        headerName: "Actions",
        renderCell: function render({ row }) {
          return (
            <Stack direction="row" spacing={1} alignItems={"center"}>
              <EditButton size="small" hideText recordItemId={row.id} />
              <DeleteButton size="small" hideText recordItemId={row.id} />
              <RegistrationButton user={row} />
              <PaymentButton user={row} />
            </Stack>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 280,
      },
    ],
    [options, isLoading]
  );

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const exportToCSV = (csvData: unknown[], fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <>
      <List
        headerButtons={
          <Button
            onClick={(e) =>
              exportToCSV(
                dataGridProps.rows.map((row) => {
                  const roww = { ...row };

                  for (let line in roww) {
                    if (typeof roww[line] === "boolean") {
                      roww[line] = !!roww[line] ? "+" : "-";
                    }
                  }
                  return {
                    ...roww,
                    teachers: row.teachers.join(", "),
                  };
                }) as unknown[],
                "семинар"
              )
            }
          >
            Экспортировать
          </Button>
        }
      >
        <DataGrid
          {...dataGridProps}
          rows={dataGridProps.rows.map((row, index) => ({
            index: index + 1,
            ...row,
          }))}
          columns={columns}
          autoHeight
          editMode={"cell"}
          onRowEditCommit={(params, event, details) =>
            console.log({ params, event, details })
          }
        />
      </List>
    </>
  );
};
