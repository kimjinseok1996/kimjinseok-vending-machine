import "../style/getDrinkSuccess.scss";
import usePaymentStore from "../store/usePaymentStore";
import useChoiceDrinksStore from "../store/useChoiceDrinksStore";
import useReset from "../hooks/useReset";

function GetDrinkSuccess() {
  const { getDrinkReset } = useReset();
  const { drinks } = useChoiceDrinksStore();
  const { isCardInserted, currentCash, paymentType } = usePaymentStore();
  const isCashType = paymentType === "cash";

  const choiceDrink = drinks.find((item) => item.choice);

  const mainText = `음료가 나왔습니다!`;
  const subText = () => {
    if (isCardInserted && currentCash) {
      return "카드와 거스름돈을 가져가 주세요.";
    }
    if (isCashType) return "거스름돈을 가져가 주세요.";
    if (!isCashType) return "카드를 가져가 주세요.";
    return "";
  };
  const paymentText = `${isCashType ? "현금" : "카드"}`;
  const drinkText = `${choiceDrink?.price.toLocaleString()}`;
  const cashText = currentCash ? `${currentCash.toLocaleString()}` : "";
  const changeText = () => {
    if (isCashType) {
      const change = (currentCash ?? 0) - (choiceDrink?.price ?? 0);
      return `${change.toLocaleString()}`;
    }
    if (!isCashType) {
      if (currentCash) {
        return `${currentCash.toLocaleString()}`;
      }
      return "";
    }
  };

  return (
    <section id="get-drink-success">
      <h2>{mainText}</h2>
      <h5>{subText()}</h5>
      <table>
        <tbody>
          <tr>
            <th>결제타입</th>
            <td>
              <span>{paymentText}</span>
            </td>
          </tr>
          <tr>
            <th>음료가격</th>
            <td>
              <span>{drinkText}</span> 원
            </td>
          </tr>
          {cashText && (
            <tr>
              <th>투입현금</th>
              <td>
                <span>{cashText}</span> 원
              </td>
            </tr>
          )}
          {changeText() && (
            <tr>
              <th>거스름돈</th>
              <td>
                <span>{changeText()}</span> 원
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button className="primary-btn" onClick={getDrinkReset}>
        다시 구매하기
      </button>
    </section>
  );
}

export default GetDrinkSuccess;
