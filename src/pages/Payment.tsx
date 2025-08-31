import "../style/payment.scss";
import usePaymentStore from "../store/usePaymentStore";
import CardPayment from "../feature/CardPayment";
import CashPayment from "../feature/CashPayment";

const radioOptions = [
  { id: "cash", label: "현금" },
  { id: "card", label: "카드" },
];

function Payment() {
  const { paymentType, setPaymentType } = usePaymentStore();

  return (
    <section id="payment">
      <div>
        <h5>결제 타입 선택</h5>
        <div>
          {radioOptions.map((option) => (
            <label key={option.id}>
              <input
                type="radio"
                name="payment"
                value={paymentType}
                checked={paymentType === option.id}
                onChange={() => setPaymentType(option.id as "cash" | "card")}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
      {paymentType === "cash" ? <CashPayment /> : <CardPayment />}
    </section>
  );
}

export default Payment;
