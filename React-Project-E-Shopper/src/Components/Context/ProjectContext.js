import { createContext, useContext } from "react";

export const ProjectContext = createContext({
    addtocart : () =>{},
    card: ()=>{}
})

export const ContextProvider = ProjectContext.Provider

export default function useProjectContext() {
   return useContext(ProjectContext)
}