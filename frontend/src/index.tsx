import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./app/ui/main.css";
import { store } from "@/shared/store/store";
import { router } from "@/shared/router/router";

const rootElement = document.getElementById("root");

if (!rootElement) throw Error('cannot find element with id "root"');

const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />;
  </Provider>
);
