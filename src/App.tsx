import "./style/global.scss";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";

const ChoiceDrinks = lazy(() => import("./pages/ChoiceDrinks"));
const Payment = lazy(() => import("./pages/Payment"));
const GetDrinkSuccess = lazy(() => import("./pages/getDrinkSuccess"));

import PageSkeleton from "./entities/skeletons/PageSkeleton";
import DefaultLayout from "./entities/layout/DefaultLayout";
import TransitionPageMoveLayout from "./entities/layout/TransitionPageMoveLayout ";

const routes = [
  {
    path: "/",
    element: (
      <DefaultLayout>
        <Suspense fallback={<PageSkeleton />}>
          <ChoiceDrinks />
        </Suspense>{" "}
      </DefaultLayout>
    ),
  },
  {
    path: "/payment",
    element: (
      <DefaultLayout>
        <Suspense fallback={<PageSkeleton />}>
          <Payment />
        </Suspense>
      </DefaultLayout>
    ),
  },
  {
    path: "/success",
    element: (
      <TransitionPageMoveLayout>
        <Suspense fallback={<PageSkeleton />}>
          <GetDrinkSuccess />
        </Suspense>
      </TransitionPageMoveLayout>
    ),
  },
];

const Router = () => useRoutes(routes);

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
