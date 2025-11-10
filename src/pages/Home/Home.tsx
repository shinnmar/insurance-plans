import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import styles from "../Home/Home.module.scss";
import Button from "../../components/Shared/Button";
import Footer from "../../components/Shared/Footer";
import { fetchUser } from "../../api/userApi";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { DOCUMENT_TYPES } from "../../constants/enums";
import CustomCheckbox from "../../components/Shared/Checkbox";
import type { FormValues } from "../../types";

const Home = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      documentType: DOCUMENT_TYPES.DNI,
    },
  });
  const { setUserData } = useUserContext();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const apiData = await fetchUser();
      setUserData({ ...data, ...apiData, step: 1 });
      navigate("/plans");
    } catch (error) {
      console.error("Error al obtener datos del API", error);
    }
  };

  const documentType = watch("documentType");

  return (
    <>
      <section className={styles.home}>
        <img
          src="/assets/images/bg_blur_left.svg"
          alt="Pink Vector with blur"
          className={styles["home__blur--left"]}
        />
        <img
          src="/assets/images/bg_blur_right.svg"
          alt="Green Vector with blur"
          className={styles["home__blur--right"]}
        />

        <div className="container">
          <div className={styles["home__wrapper"]}>
            <div className={styles["home__image-container"]}>
              <img
                src="/assets/images/hero_img.jpg"
                alt="Familia feliz asegurada"
                className={styles["home__image--desktop"]}
              />
            </div>

            <div className={styles["home__text"]}>
              <article className={styles["home__wrapper--mobile"]}>
                <div className={styles["home__text--mobile"]}>
                  <span className={styles["home__tagproduct"]}>
                    Seguro Salud Flexible
                  </span>
                  <h1 className={styles["home__title"]}>
                    Creado para ti y tu familia
                  </h1>
                </div>

                <img
                  src="/assets/images/hero_mobile_img.jpg"
                  alt="Familia feliz asegurada"
                  className={styles["home__image--mobile"]}
                />
              </article>

              <p>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles["home__form"]}
              >
                <article>
                  <label className={styles["home__label--documents"]}>
                    <select
                      className={styles["home__select"]}
                      {...register("documentType", { required: true })}
                    >
                      <option value={DOCUMENT_TYPES.DNI}>DNI</option>
                      <option value={DOCUMENT_TYPES.CE}>
                        Carnet de extranjería
                      </option>
                    </select>
                  </label>

                  <label className={styles["home__label--document"]}>
                    Nro. de documento
                    <input
                      type="text"
                      maxLength={8}
                      className={styles["home__input"]}
                      {...register("documentNumber", {
                        required: "Este campo es obligatorio",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Solo se permiten números",
                        },
                        validate: (value) => {
                          const length = value.length;
                          if (
                            documentType === DOCUMENT_TYPES.DNI.toLowerCase() &&
                            length !== 8
                          )
                            return "El DNI debe tener 8 dígitos";
                          if (
                            documentType === DOCUMENT_TYPES.CE.toLowerCase() &&
                            length !== 10
                          )
                            return "El CE debe tener 10 dígitos";
                          return true;
                        },
                      })}
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/\D/g, "");
                      }}
                    />
                  </label>
                </article>
                {errors.documentNumber && (
                  <span className={styles["home__error-label"]}>
                    {errors.documentNumber.message}
                  </span>
                )}

                <label className={styles["home__label--cellphone"]}>
                  Celular
                  <input
                    type="text"
                    maxLength={9}
                    className={styles["home__input"]}
                    {...register("phone", {
                      required: "Este campo es obligatorio",
                      pattern: {
                        value: /^9\d{8}$/,
                        message:
                          "El celular debe tener 9 dígitos y comenzar con 9",
                      },
                    })}
                    onInput={(e) => {
                      const target = e.target as HTMLInputElement;
                      target.value = target.value.replace(/\D/g, "");
                    }}
                  />
                </label>
                {errors.phone && (
                  <span className={styles["home__error-label"]}>
                    {errors.phone.message}
                  </span>
                )}

                <CustomCheckbox
                  label="Acepto las Políticas de Privacidad"
                  register={register}
                  name="acceptPrivacy"
                  error={errors.acceptPrivacy?.message}
                  validation={{
                    required: "Debes aceptar las Políticas de Privacidad",
                  }}
                />

                <CustomCheckbox
                  label="Acepto la Política de Comunicaciones Comerciales"
                  register={register}
                  name="acceptCommunications"
                  error={errors.acceptCommunications?.message}
                  validation={{
                    required: "Debes aceptar la Política de Comunicaciones",
                  }}
                />

                <a href="">Aplican términos y condiciones</a>

                <Button type="submit" variant="black">
                  Cotiza aquí
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
