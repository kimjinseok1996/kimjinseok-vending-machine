import type { ReactNode } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import FramerMotion from "../components/FramerMotion";

const TransitionPageMoveLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigationType = useNavigationType();

  const _distance = 30;

  const _initialDistanceValue =
    navigationType === "PUSH" ? _distance : -_distance;

  const _uniqueKey = location.pathname;
  const _initial = { opacity: 0, x: _initialDistanceValue };
  const _animate = { opacity: 1, x: 0 };
  const _transition = { duration: 0.5 };

  const _values = {
    _uniqueKey,
    _initial,
    _animate,
    _transition,
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <FramerMotion values={_values}>{children}</FramerMotion>
    </div>
  );
};

export default TransitionPageMoveLayout;
