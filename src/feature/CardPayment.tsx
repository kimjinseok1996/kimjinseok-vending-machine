import { useRef } from "react";
import usePaymentStore from "../store/usePaymentStore";

const isCardDisabledProbabilityCount = 3; // 1/3 확률로 카드 인식 실패

function CardPayment() {
  const { isCardInserted, setIsCardInserted } = usePaymentStore();
  const cardTimeout = useRef<number | null>(null);

  const random = Math.random() * 10;

  const cardInsertAction = () => {
    setIsCardInserted("loading");
    if (cardTimeout.current) clearTimeout(cardTimeout.current);
    cardTimeout.current = window.setTimeout(() => {
      if (random < isCardDisabledProbabilityCount) {
        setIsCardInserted("disable");
        return;
      }
      setIsCardInserted(true);
    }, 2000);
  };

  return (
    <div>
      <h5>카드 투입</h5>
      <div>
        <button className="primary-btn" onClick={cardInsertAction}>
          카드 삽입
        </button>
        <button className="danger-btn" onClick={() => setIsCardInserted(false)}>
          카드 제거
        </button>
      </div>
      {isCardInserted === "loading" ? <p>카드 인식 중...</p> : null}
      {isCardInserted === "disable" ? (
        <p style={{ color: "var(--red-color)" }}>
          카드 인식 오류: 카드 잔액을 확인 해주세요.
        </p>
      ) : null}
      {typeof isCardInserted === "boolean" && (
        <p>{isCardInserted ? "카드 인식 완료" : "카드를 넣어주세요."}</p>
      )}
    </div>
  );
}

export default CardPayment;
