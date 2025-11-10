import BtnBack from "../../components/Shared/BtnBack";
import Card from "../../components/Shared/Card";
import Steps from "../../components/Steps/Steps";
import { useUserContext } from "../../context/UserContext";
import styles from "../Summary/Summary.module.scss";
import { HiUsers } from "react-icons/hi2";

const Summary = () => {
  const { userData } = useUserContext();


  return (
    <>
      <Steps />
      {userData && (
        <section className={styles.summary}>
          <div className="container">
            <BtnBack />
            <h1 className={styles["summary__title"]}>Resumen del seguro</h1>

            <Card className={styles["summary__card"]}>
              <div className={styles["summary__card__header"]}>
                <span>Precios calculados para:</span>
                <h2>
                  <HiUsers />
                  {userData.name} {userData.lastName}
                </h2>
              </div>

              <div className={styles["summary__card__info"]}>
                <h3>Responsable de pago</h3>
                <span>DNI: {userData.documentNumber}</span>
                <span>Celular: {userData.phone}</span>
              </div>

              <div className={styles["summary__card__info"]}>
                <h3>Plan elegido</h3>
                <span>{userData.plan?.name}</span>
                <span>Costo del Plan: ${userData.plan?.price} al mes</span>
              </div>
            </Card>
          </div>
        </section>
      )}
    </>
  );
};

export default Summary;
