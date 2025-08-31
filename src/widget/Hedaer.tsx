import "../style/header.scss";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import useAllReset from "../hooks/useReset";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { allReset, getDrinkReset } = useAllReset();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <header>
      <button
        className="arrow-btn"
        onClick={handleGoBack}
        disabled={location.pathname === "/"}
      >
        <BiArrowBack />
      </button>
      <div>
        <button className="danger-btn" onClick={getDrinkReset}>
          구매 취소
        </button>
        <button className="secondary-btn" onClick={allReset}>
          초기화
        </button>
      </div>
    </header>
  );
}

export default Header;
