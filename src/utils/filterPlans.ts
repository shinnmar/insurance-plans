import type { Plan } from "../types/plan";
import { PLAN_FOR } from "../constants/enums";

export const filterPlans = (plans: Plan[], age: number, type: string) => {
  return plans.filter((plan, index) => {
    plan.id = Math.floor(Math.random() * 1000000);
    plan.recommended = index === 1;
    if (age > plan.age) {
      return false;
    }
    if (type === PLAN_FOR.FOR_SOMEONE_ELSE) {
      plan.price = plan.price * 0.95;
    }
    return true;
  });
};