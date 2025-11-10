export interface Plan {
    age: number;
    name: string;
    price: number;
    description: Array<string>;
    id?: number;
    recommended: boolean;
}

export interface PlanListProps {
    plans: Plan[];
    onSelectPlan: (planId: Plan) => void;
}

export interface PlanCardProps {
    plan: Plan;
    onSelect: () => void;
}