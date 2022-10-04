import { useEffect, useState } from "react"

    const HookuseEffect = () => {
        // 1 - useEffect, sem depêndencias 
        useEffect(() => {
            console.log("Estou sendo executado!");
        });

        const [number,setNumber] = useState(1);

    const changeSomeThing = () => {
        return setNumber(number + 1);
    };

    // array de depêndencias vazio

    useEffect(() => {
        console.log("serei exeuctado apenas uma vez.");
    },[]);

    // 3 - item de array de deps.
    const [anotherNumber,setAnotherNumber] = useState(0);

    useEffect(() => {
        if(anotherNumber > 0){
            console.log("Sou executado apenas quando o anotherNumber muda!");
        }
    },[anotherNumber]);

    // 4 - cleanup do useEffect 

    useEffect(() => {
        // const timer = setTimeout(() => {
        //     console.log("Hello world");

        //     setAnotherNumber(anotherNumber + 1);
        // },2000);

        // return () => clearTimeout(timer);
    },[anotherNumber]);

    return (
        <div>
            <h2> HookuseEffect </h2>
            <p> Number: {number} </p>
            <button onClick={changeSomeThing}> Executar! </button>
            <p> Another number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
                Mudar Another Number
            </button>
            <hr />
        </div>
  )
}

export default HookuseEffect