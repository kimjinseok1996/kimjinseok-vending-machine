import type { ReactNode } from "react";
import TransitionPageMoveLayout from "./TransitionPageMoveLayout ";
import Header from "../../widget/Hedaer";
import Footer from "../../widget/Footer";

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <Header />
      <TransitionPageMoveLayout>{children}</TransitionPageMoveLayout>
      <Footer />
    </div>
  );
}
export default DefaultLayout;
