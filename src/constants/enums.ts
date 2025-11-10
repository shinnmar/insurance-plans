export const DOCUMENT_TYPES = {
  DNI: "DNI",
  CE: "CE",
} as const;

export const PLAN_FOR = {
  FOR_ME: "forMe",
  FOR_SOMEONE_ELSE: "forSomeoneElse",
} as const;


export type DocumentType = (typeof DOCUMENT_TYPES)[keyof typeof DOCUMENT_TYPES];
export type PlanFor = (typeof PLAN_FOR)[keyof typeof PLAN_FOR];