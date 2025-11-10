import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BtnBack.module.scss";
import { LuCircleChevronLeft } from "react-icons/lu";
import { useUserContext } from "../../context/UserContext";

interface BtnBackProps {
  className?: string;
}

const BtnBack: React.FC<BtnBackProps> = ({ className }) => {
  const navigate = useNavigate();
  const { setUserData, userData } = useUserContext();

  const handleBack = () => {
    if (!userData || userData.step === undefined) return;
    const updatedUserData = { ...userData, step: userData.step - 1 };
    setUserData(updatedUserData);
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className={`${styles.btnBack} ${className ?? ""}`}
    >
      <LuCircleChevronLeft />
      Volver
    </button>
  );
};

export default BtnBack;
