import { useState, useEffect, useMemo } from "react"

const HookuseMemo = () => {
    const [number,setNumber] = useState();

    // const premiumNumbers = ["0","100","200"]
    const premiumNumbers = useMemo((e) => {
        return  ["0","100","200"];
    },[]);


    useEffect(() => {
        console.log("Premium numbers foi alterado");
    },[premiumNumbers]);

    return (
        <div>
            <h2> useMemo </h2>
            <input 
                type="text" 
                onChange={(e) => setNumber(e.target.value)}
                value={number}
            />
            {premiumNumbers.includes(number) ? <p> Acertou o número </p> : " "}
            <hr />
        </div>
    )
}

export default HookuseMemo