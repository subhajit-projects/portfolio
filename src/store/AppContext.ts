import { createContext } from "react";
import { AppContextInterface } from "./AppContextInterface";

const initValue: AppContextInterface = {
    appContextData: {},
    setAppContextData: () => {}
}

export const AppContext = createContext(initValue);


// {
//     theme : {
//         isDark: false
//     }
// }