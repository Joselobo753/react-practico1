import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/Root";
import Eje1 from "../practico/Eje1";
import Eje4 from "../practico/eje4/Eje4";
import Eje5 from "../practico/eje5/Eje5";

import Eje7View from "../practico/eje7/Eje7View";
import Eje8 from "../practico/eje8/eje8.jsx/Eje8";

import Eje6View from "../practico/eje6/Eje6View";
import Eje9View from "../practico/eje9/Eje9View";
import Eje10 from "../practico/eje10/Eje10";
import Eje10View from "../practico/eje10/Eje10View";
import Eje11View from "../practico/eje11/Eje11View";
import Eje13View from "../practico/eje13/Eje13View";
import Eje12View from "../practico/Eje12/Eje12View";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "eje1",
        element: <Eje1 eje2="mi amigo esto es una propType" />,
      },
      {
        path: "eje4",
        element: <Eje4 />,
      },
      {
        path: "eje5",
        element: <Eje5/>,
      },
      {
        path: "eje6",
        element: <Eje6View/>,
      },
      {
        path: "eje7",
        element: <Eje7View/>,
      },
      {
        path: "eje8",
        element: <Eje8/>,
      },
      {
        path: "eje9",
        element: <Eje9View/>
      },
      {
        path: "eje10",
        element: <Eje10View/>
      },
      {
        path: "eje11",
        element: <Eje11View/>
      },
      {
        path: "eje12",
        element: <Eje12View/>
      },
      {
        path: "eje13",
        element: <Eje13View/>
      }
    ],
  },
]);

