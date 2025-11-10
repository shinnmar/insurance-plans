import React from "react";
import styles from "./Steps.module.scss";
import { useUserContext } from "../../context/UserContext";

const Steps: React.FC = () => {
  const { userData } = useUserContext();
  const currentStep = userData?.step ?? 1;

  const steps = [
    { id: 1, title: "Planes y coberturas" },
    { id: 2, title: "Resumen" },
  ];

  return (
    <nav className={styles.steps} aria-label="Progreso del usuario">
      <ol className={styles["steps__list"]}>
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = currentStep > step.id;

          return (
            <React.Fragment key={step.id}>
              <li
                className={`${styles["steps__step"]} ${
                  isActive ? styles["steps__step--active"] : ""
                }`}
                aria-current={isActive ? "step" : undefined}
              >
                <span className={styles["steps__number"]}>{step.id}</span>
                <p className={styles["steps__title"]}>{step.title}</p>
              </li>

              {index < steps.length - 1 && (
                <li
                  className={`${styles["steps__dashes"]} ${
                    isCompleted || isActive
                      ? styles["steps__dashes--active"]
                      : ""
                  }`}
                  aria-hidden="true"
                >
                  <img src="/assets/images/progress-bar.png" alt="progress bar" />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Steps;
