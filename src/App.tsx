import "./style/global.scss";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";

const ChoiceDrinks = lazy(() => import("./pages/ChoiceDrinks"));
const Payment = lazy(() => import("./pages/Payment"));

import PageSkeleton from "./entities/skeletons/PageSkeleton";
import DefaultLayout from "./entities/layout/DefaultLayout";

const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <ChoiceDrinks />
      </Suspense>
    ),
  },
  {
    path: "/payment",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <Payment />
      </Suspense>
    ),
  },
];

const Router = () => useRoutes(routes);

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
