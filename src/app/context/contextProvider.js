// "user client";

import { useEffect, useState } from "react";
import { CurrentUserApi } from "../services/currentUserService";
import userContext from "./userContext";
import { toast , ToastContainer } from "react-toastify";

const ContextProvider = ({children}) => {
  const [isUser , setIsUser] = useState(undefined);

  useEffect(() => {
   async function loadUser() {
   try {
    const currentUser =  await CurrentUserApi();
    toast.success(currentUser?.data?.message);
    setIsUser(currentUser);
   } catch (error) {
    toast.error(error?.response?.data?.message);  // Show error toast
    setIsUser(null);
   }
   }
   loadUser();
   
  },[])


  return(
    <userContext.Provider value={{isUser , setIsUser}}>
      {children}
      <ToastContainer />
    </userContext.Provider>
  )
};

export default ContextProvider;