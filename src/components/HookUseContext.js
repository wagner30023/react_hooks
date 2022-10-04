// importa o contexto
import { createContext } from "react";

// cria
export const SomeContext = createContext();

// exporta
export const HookUseContext = ({children}) => {
    // valor do contexto
    const contextValue = "testing context"

    return (
        <SomeContext.Provider value={{contextValue}}>
            {children}
        </SomeContext.Provider>
    )
}