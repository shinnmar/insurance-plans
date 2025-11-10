import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PlanCard from "../PlanCard/PlanCard";
import type { PlanListProps } from "../../types/plan";
import styles from "./PlanList.module.scss";

const PlanList: React.FC<PlanListProps> = ({ plans, onSelectPlan }) => {
  return (
    <div className={styles.planList}>
      <div className={styles.planList__grid}>
        {plans.map((plan) => (
          <div key={plan.id} className={styles.planList__item}>
            <PlanCard plan={plan} onSelect={() => onSelectPlan(plan)} />
          </div>
        ))}
      </div>

      <div className={styles.planList__carousel}>
        <div className={styles.planList__wrapper}>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={"auto"}
            centeredSlides={false}
            pagination={{
              el: ".custom-pagination",
              type: "fraction",
            }}
            navigation={{
              nextEl: `.${styles["planList__arrow--next"]}`,
              prevEl: `.${styles["planList__arrow--prev"]}`,
            }}
            breakpoints={{
              765: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 15,
              },
              576: {
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 0,
              },
            }}
            style={{ paddingBottom: "2rem" }}
          >
            {plans.map((plan) => (
              <SwiperSlide key={plan.id}>
                <PlanCard plan={plan} onSelect={() => onSelectPlan(plan)} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.planList__arrows}>
            <button
              className={`${styles.planList__arrow} ${styles["planList__arrow--prev"]}`}
              aria-label="anterior"
            >
              <img src="/assets/icons/arrow-left-light.svg" alt="anterior" />
            </button>
            <div className={styles.planList__controls}>
              <div className="custom-pagination"></div>
            </div>
            <button
              className={`${styles.planList__arrow} ${styles["planList__arrow--next"]}`}
              aria-label="siguiente"
            >
              <img src="/assets/icons/arrow-right.svg" alt="siguiente" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanList;
