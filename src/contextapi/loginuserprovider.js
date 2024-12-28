import { createContext, useState, useEffect, useContext } from "react";
import { getLocalStorage } from "@/helper/helper";
import { usePathname } from "next/navigation";

const LoginDataContext = createContext(null);

// const LoginProvider = ({ children }) => {
//   const [loginData, setLoginData] = useState(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     const data = getLocalStorage();
//     setLoginData(data);
//   }, [pathname]);

//   return (
//     <LoginDataContext.Provider value={loginData}>
//       {children}
//     </LoginDataContext.Provider>
//   );
// };

// export default LoginProvider;

const LoginProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(null);
  const pathname = usePathname();

  // Function to update the loginData


  // Load data from localStorage initially and on pathname change
  useEffect(() => {
    const data = getLocalStorage();
    console.log("data user>>>>",data)
    setLoginData(data);
  }, [pathname]);

  // Sync data across tabs using storage event
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "loginData") {
        const updatedData = event.newValue ? JSON.parse(event.newValue) : null;
        setLoginData(updatedData);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <LoginDataContext.Provider value={ loginData }>
      {children}
    </LoginDataContext.Provider>
  );
};

export default LoginProvider;


export const useLoginData = () => useContext(LoginDataContext);
