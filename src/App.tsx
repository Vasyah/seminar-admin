import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mui";

import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";
import { RefineKbarProvider } from "@pankod/refine-kbar";
import { Title, Sider, Layout, Header } from "components/layout";
import { ColorModeContextProvider } from "contexts";
import { PostList, PostEdit, PostCreate } from "pages/posts";
import { OffLayoutArea } from "components/offLayoutArea";
import { liveProvider } from "@pankod/refine-ably";
import { ablyClient } from "./providers/liveProvider";
import { Dashboard } from "./pages/dashboard/Dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";

const devSeminarServer = "http://localhost:5000";
const prodSeminarServer = "https://seminarmsk.ru:7000";

function App() {
  const isDev = process.env.NODE_ENV === "development";

  const API_URL = isDev ? devSeminarServer : prodSeminarServer;

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <RefineKbarProvider>
          <Refine
            dataProvider={dataProvider(prodSeminarServer)}
            notificationProvider={notificationProvider}
            ReadyPage={ReadyPage}
            catchAll={<ErrorComponent />}
            Title={Title}
            Sider={Sider}
            Layout={Layout}
            Header={Header}
            options={{ liveMode: "auto" }}
            routerProvider={routerProvider}
            resources={[
              {
                options: { label: "Информация" },
                name: "Dashboard",
                list: Dashboard,
                icon: <DashboardIcon />,
              },
              {
                options: { label: "Участники" },
                name: "users",
                list: PostList,
                create: PostCreate,
                edit: PostEdit,
                icon: <GroupIcon />,
              },
            ]}
            OffLayoutArea={OffLayoutArea}
            // liveProvider={liveProvider(ablyClient)}
          />
        </RefineKbarProvider>
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
