import type { FormValues } from "../types";
import type { Plan } from "./plan";

export type UserData = FormValues & {
  name: string;
  lastName: string;
  birthDay: string;
  age: number;
  acceptCommunications: boolean;
  acceptPrivacy: boolean;
  documentNumber: string;
  documentType: string;
  phone: string;
  plan?: Plan;
  step?: number;
};

export type UserContextType = {
  userData: UserData | null;
  setUserData: (data: UserData) => void;
};