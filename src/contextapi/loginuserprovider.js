import { createContext, useState, useEffect, useContext } from "react";
import { getLocalStorage } from "@/helper/helper";
import { usePathname } from "next/navigation";

const LoginDataContext = createContext(null);

const LoginProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const data = getLocalStorage();
    setLoginData(data);
  }, [pathname]);

  return (
    <LoginDataContext.Provider value={loginData}>
      {children}
    </LoginDataContext.Provider>
  );
};

export default LoginProvider;

export const useLoginData = () => useContext(LoginDataContext);
