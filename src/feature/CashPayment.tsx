import usePaymentStore from "../store/usePaymentStore";

const cashOptions = [100, 500, 1000, 5000, 10000];

function CashPayment() {
  const { currentCash, setCurrentCash, resetCurrentCash } = usePaymentStore();

  return (
    <div>
      <h5>현금 투입</h5>
      <div>
        {cashOptions.map((option) => (
          <button
            className="primary-btn"
            key={option}
            onClick={() => setCurrentCash(option)}
          >
            + {option.toLocaleString()}원
          </button>
        ))}
        <button
          className="danger-btn"
          onClick={resetCurrentCash}
          disabled={currentCash === 0}
        >
          잔돈 반환
        </button>
      </div>
    </div>
  );
}

export default CashPayment;
