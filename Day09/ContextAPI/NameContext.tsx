import { createContext } from "react";
type nameC={
    name:string,
    setName:Function
}

export const NameContext = createContext<nameC>({name:"",setName:()=>{}});