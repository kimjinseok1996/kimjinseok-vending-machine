import "../style/footer.scss";
import useChoiceDrinksStore from "../store/useChoiceDrinksStore";
import usePaymentStore from "../store/usePaymentStore";
import useAllReset from "../hooks/useReset";

const primaryColorStyyle = {
  color: "var(--primary-color)",
};

const paymentTypeOptions = {
  cash: "현금",
  card: "카드",
};

function Footer() {
  const { getDrinkReset } = useAllReset();
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
    const mainText = `음료가 나왔습니다.`;
    const paymentText = `결제타입: ${paymentType === "cash" ? "현금" : "카드"}`;
    const drinkText = `음료가격: ${choiceDrink?.price.toLocaleString()}`;
    const cashText = currentCash
      ? `투입현금: ${currentCash.toLocaleString()}원`
      : "";
    const changeText = () => {
      if (paymentType === "cash") {
        const change = (currentCash ?? 0) - (choiceDrink?.price ?? 0);
        return `거스름돈: ${change.toLocaleString()}원`;
      }
      if (paymentType === "card") {
        if (currentCash) {
          return `거스름돈: ${currentCash.toLocaleString()}원`;
        }
        return "";
      }
    };

    const alertText = `${mainText}\n${paymentText}\n\n${drinkText}\n${cashText}\n${changeText()}`;

    alert(alertText);
    setDownDrinkCount(choiceDrink?.name || "");
    getDrinkReset();
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
    <footer>
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
            음료 배출
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
