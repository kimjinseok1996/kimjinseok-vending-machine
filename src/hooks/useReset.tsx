import { useNavigate } from "react-router-dom";
import useChoiceDrinksStore from "../store/useChoiceDrinksStore";
import usePaymentStore from "../store/usePaymentStore";

function useReset() {
  const navigate = useNavigate();
  const { resetDrinks, resetChoiceDrink } = useChoiceDrinksStore();
  const { resetCurrentCash, resetCardInserted } = usePaymentStore();

  const allReset = () => {
    resetDrinks();
    resetCurrentCash(); // 잔돈 반환
    resetCardInserted(); // 카드 반환
    navigate("/");
  };

  const getDrinkReset = () => {
    resetChoiceDrink();
    resetCurrentCash();
    resetCardInserted();
    navigate("/");
  };

  return { allReset, getDrinkReset };
}

export default useReset;
