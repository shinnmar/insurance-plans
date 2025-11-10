import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <a
            href="/"
            aria-label="Rimac home"
            className={styles["footer__logo-link"]}
          >
            <img
              src="/assets/icons/logo_white_rimac.svg"
              alt="Logo Rimac desktop"
              className={`${styles.footer__logo} ${styles["footer__logo--desktop"]}`}
            />
            <img
              src="/assets/icons/logo_white_rimac_mobile.svg"
              alt="Logo Rimac mobile"
              className={`${styles.footer__logo} ${styles["footer__logo--mobile"]}`}
            />
          </a>

          <span className={styles.footer__text}>
            © 2025 RIMAC Seguros y Reaseguros.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
