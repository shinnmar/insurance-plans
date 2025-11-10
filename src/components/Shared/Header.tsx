import styles from "./Header.module.scss";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <a
            href="/"
            aria-label="Ir al inicio de Rimac"
            className={styles["header__logo-link"]}
          >
            <img
              src="https://www.rimac.com/salud-digital/assets/rebrand/logo-rimac.svg"
              alt="Logo Rimac"
              className={styles.header__logo}
            />
          </a>

          <div className={styles.header__contact}>
            <span className={styles.header__text}>
              ¡Compra por este medio!
            </span>
            <a
              href="tel:014116001"
              className={styles.header__phone}
              aria-label="Llamar al número (01) 411 6001"
            >
              <FaPhoneAlt aria-hidden="true" />
              <strong>(01) 411 6001</strong>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
