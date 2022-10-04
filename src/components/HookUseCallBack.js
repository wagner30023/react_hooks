import { useCallback, useState } from "react"
import List from "./List"


const HookUseCallBack = () => {
    const [counter,setCounter] = useState(0);
    const getItemsFromDatabase = useCallback( () => {
        return ["a", "b", "c", "d", "e", "f"];
    },[]);

    return (
        <div>
            <h2> useClallback </h2>
            <List getItems={getItemsFromDatabase} />
            <button onClick={() => setCounter(counter + 1 )}> Alterar  </button>
            <p> {counter} </p>
            <hr />
        </div>
    )
}

export default HookUseCallBack