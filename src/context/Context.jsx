import { createContext, useState } from 'react';


// Cria um Contexto com um valor padrão
export const MeuContexto = createContext();

// eslint-disable-next-line react/prop-types
export function ContextProvider({children}){
    const [value,setValue] = useState(1)
    const [count,setCount] = useState(0)
    const [key,setKey] = useState()
    const [updated,setUpdated] = useState()

    return(
    <MeuContexto.Provider value={{value, setValue, count, setCount,key, setKey, updated,setUpdated}}>
    {children}
    </MeuContexto.Provider>
    )
}