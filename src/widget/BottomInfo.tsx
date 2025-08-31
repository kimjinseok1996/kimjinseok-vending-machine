import "../style/bottomInfo.scss";
import useChoiceDrinksStore from "../store/useChoiceDrinksStore";
import usePaymentStore from "../store/usePaymentStore";
import { useNavigate } from "react-router-dom";

const primaryColorStyyle = {
  color: "var(--primary-color)",
};

const paymentTypeOptions = {
  cash: "현금",
  card: "카드",
};

function BottomInfo() {
  const navigate = useNavigate();
  const { drinks, setDownDrinkCount } = useChoiceDrinksStore();
  const { currentCash, paymentType, isCardInserted } = usePaymentStore();

  const choiceDrink = drinks.find((item) => item.choice);

  const isBtnDisabled = () => {
    if (!choiceDrink) return true;
    if (choiceDrink.stock <= 0) return true;
    if (paymentType === "cash") {
      if (currentCash >= (choiceDrink?.price ?? 0)) {
        return false;
      }
    }
    if (paymentType === "card") {
      if (isCardInserted === true) return false;
    }
    return true;
  };

  const handleGetDrink = () => {
    setDownDrinkCount(choiceDrink?.name || "");
    navigate("/success");
  };

  const drinkInfo = [
    {
      label: "선택한 음료수",
      value: choiceDrink?.name || "음료수를 선택 해주세요.",
    },
    { label: "가격", value: `${choiceDrink?.price.toLocaleString() || 0}원` },
    { label: "재고", value: `${choiceDrink?.stock.toLocaleString() || 0}개` },
  ];

  const paymentInfo = [
    { label: "결제 타입", value: paymentTypeOptions[paymentType] },
    { label: "투입된 현금", value: `${currentCash?.toLocaleString() || 0}원` },
  ];

  return (
    <div id="bottom-info">
      <div className="container">
        <div className="drink-info">
          {drinkInfo.map((info) => (
            <p key={info.label}>
              {info.label}: <b style={primaryColorStyyle}>{info.value}</b>
            </p>
          ))}
        </div>
        <div className="payment-info">
          {paymentInfo.map((info) => (
            <p key={info.label}>
              {info.label}: <b style={primaryColorStyyle}>{info.value}</b>
            </p>
          ))}
          <button
            className="primary-btn"
            disabled={isBtnDisabled()}
            onClick={handleGetDrink}
          >
            구매 하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomInfo;
