import { useContext } from "react";
import AuthContext from "../context/AppState";

const useStateContext = () => {
  return useContext(AuthContext);
};

export default useStateContext;
