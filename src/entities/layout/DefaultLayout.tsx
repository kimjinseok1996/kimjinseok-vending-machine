import type { ReactNode } from "react";
import TransitionPageMoveLayout from "./TransitionPageMoveLayout ";
import Header from "../../widget/Hedaer";
import BottomInfo from "../../widget/BottomInfo";

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <Header />
      <TransitionPageMoveLayout>{children}</TransitionPageMoveLayout>
      <BottomInfo />
    </div>
  );
}
export default DefaultLayout;
