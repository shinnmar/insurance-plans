import { useNavigate } from "react-router-dom";
import { fetchPlans } from "../../api/plansApi";
import PlanList from "../../components/PlanList/PlanList";
import Card from "../../components/Shared/Card";
import { PLAN_FOR } from "../../constants/enums";
import { useUserContext } from "../../context/UserContext";
import type { Plan } from "../../types/plan";
import { filterPlans } from "../../utils/filterPlans";
import styles from "./Plans.module.scss";
import { useState } from "react";
import Steps from "../../components/Steps/Steps";
import BtnBack from "../../components/Shared/BtnBack";
import { FaCircleCheck } from "react-icons/fa6";

const Plans = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserContext();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  console.log(userData);

  const getPlans = async () => {
    setPlans([]);
    const apiData = await fetchPlans();
    return apiData;
  };
  
  const selectType = async (type: string) => {
    setSelectedType(type);
    console.log(type);
    const response = await getPlans();
    const filteredPlans = userData ? filterPlans(response.list, userData.age, type ?? "") : [];
    setPlans(filteredPlans);
    console.log(response.list);
  };

  const handleSelectPlan = (plan: Plan) => {
    console.log(plan);
    if (userData) {
      const updatedUserData = { ...userData, plan, step: 2 };
      setUserData(updatedUserData);
      navigate("/summary");
    }
  };

  return (
    <>
      <Steps />
      {userData && (
        <div className={styles.plansPage}>
          <div className="container">
            <BtnBack />
            <h2>{userData.name} ¿Para quién deseas cotizar?</h2>
            <p className={styles["plansPage__text"]}>
              Selecciona la opción que se ajuste más a tus necesidades.
            </p>
            <div className={styles.typesContainer}>
              <Card
                onClick={() => selectType(PLAN_FOR.FOR_ME)}
                className={`${styles.cardType} ${
                  selectedType === PLAN_FOR.FOR_ME
                    ? styles["cardType--active"]
                    : ""
                }`}
              >
                <div className={styles["plansPage__wrapper"]}>
                  <img
                    src="/assets/icons/icon_my_user.svg"
                    alt="Icono Para mí, plan personal"
                    className={styles["plansPage__icon"]}
                  />
                  <h4>Para mí</h4>
                  <p>
                    Cotiza tu seguro de salud y agrega familiares si así lo
                    deseas.
                  </p>{" "}
                  <span className={styles["plansPage__unselected"]}></span>
                  {selectedType === PLAN_FOR.FOR_ME && (
                    <span className={styles["plansPage__selected"]}>
                      <FaCircleCheck />
                    </span>
                  )}
                </div>
              </Card>
              <Card
                onClick={() => selectType(PLAN_FOR.FOR_SOMEONE_ELSE)}
                className={`${styles.cardType} ${
                  selectedType === PLAN_FOR.FOR_SOMEONE_ELSE
                    ? styles["cardType--active"]
                    : ""
                }`}
              >
                <div className={styles["plansPage__wrapper"]}>
                  <img
                    src="/assets/icons/icon_other_user.svg"
                    alt="Icono Para plan de alguien más"
                    className={styles["plansPage__icon"]}
                  />
                  <h4>Para alguien más</h4>
                  <p>
                    Realiza una cotización para uno de tus familiares o
                    cualquier persona.
                  </p>
                  <span className={styles["plansPage__unselected"]}></span>
                  {selectedType === PLAN_FOR.FOR_SOMEONE_ELSE && (
                    <span className={styles["plansPage__selected"]}>
                      <FaCircleCheck />
                    </span>
                  )}
                </div>
              </Card>
            </div>
            <PlanList
              plans={plans}
              onSelectPlan={(plan) => handleSelectPlan(plan)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Plans;
