import "../style/choiceDrinks.scss";
import useChoiceDrinksStore from "../store/useChoiceDrinksStore";
import { useNavigate } from "react-router-dom";
import { PiBeerBottle, PiCoffee, PiPintGlass } from "react-icons/pi";

const nameToIcon = {
  콜라: <PiBeerBottle />,
  물: <PiPintGlass />,
  커피: <PiCoffee />,
};

function ChoiceDrinks() {
  const navigate = useNavigate();
  const { drinks, setChoiceDrink } = useChoiceDrinksStore();

  const handleStockClick = (name: string) => {
    setChoiceDrink(name);
    navigate("/payment");
  };

  return (
    <section id="choice-drinks">
      <h2>음료 선택</h2>
      <div className="wrap">
        {drinks.map((item) => (
          <button
            className={item.choice ? "drink choice" : "drink"}
            key={item.name}
            disabled={item.stock === 0}
            onClick={() => handleStockClick(item.name)}
          >
            <div className="icon">
              {nameToIcon[item.name as keyof typeof nameToIcon]}
            </div>
            <p className="name">{item.name}</p>
            <p className="price">{item.price.toLocaleString()}원</p>
            <p className="stock">재고: {item.stock}개</p>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ChoiceDrinks;
