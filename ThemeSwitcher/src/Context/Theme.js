import { createContext,useContext } from "react";

export const Themecontext=createContext({
    themeMode: "Light",
    darktheme: ()=>{},
    Lighttheme: ()=>{},


})
export const Themeprovider=Themecontext.Provider

export default function useTheme(){
    return useContext(Themecontext)
}