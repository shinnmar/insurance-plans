import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { UserContextType, UserData } from "../types/user";
import { calculateAge } from "../utils/calculateAge";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserDataState] = useState<UserData | null>(null);

  const setUserData = (data: UserData) => {
    const age = calculateAge(data.birthDay);
    setUserDataState({ ...data, age });
  };

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext debe usarse dentro de <UserProvider>");
  }
  return context;
};
