import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import WelcomePage from "./Pages/WelcomePage.tsx";
import SecondPage from "./Pages/SecondPage.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path:"/",
        element: <WelcomePage />,
      },
      {
        path:"thedreamteam",
        element: <SecondPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);