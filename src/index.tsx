import { createRoot } from "react-dom/client";
import { App } from "./Components/App/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "@/Pages/About";
import { Shop } from "@/Pages/Shop";
import { Suspense } from "react";

const root = document.getElementById("root");

if (!root) {
   throw new Error("No root element");
}

const container = createRoot(root);

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/about",
            element: (
               <Suspense fallback="loading...">
                  <About />
               </Suspense>
            ),
         },
         {
            path: "/shop",
            element: (
               <Suspense fallback="loading...">
                  <Shop />
               </Suspense>
            ),
         },
      ],
   },
]);

container.render(<RouterProvider router={router} />);
