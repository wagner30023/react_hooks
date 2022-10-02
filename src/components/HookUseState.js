import { useState } from "react"

const HookUseState = () => {
    // 1 - useState 
    let userName  = "João";

    // desestruturação
    const [name,setName] = useState("Matheus");
    const [age,setAge] = useState(18);

    const changeNames = () => {
        userName = "João Souza";
        console.log(name);
        console.log(userName);
        setName("Matheus Batitsti");
    };

    const handleSubmit = (e) => {
        // O formulario não é enviado por default como no formulario  html => e.preventDefault(); 
        e.preventDefault();

        // envio a uma API
        console.log(age);
    }; 

    // console.log(name);

    return (
        <div>
            {/* 1 - useState */}
            <h2> useState </h2>
                <p> Variável: {userName}</p>
                <p> Name: {name}</p>
                <button onClick={changeNames}> Mudar Nomes </button>
            {/* 2 - useState e input */}
            <p> Digite a sua idade: </p>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)}
                />
                <input type="submit" value="Enviar" />
            </form>
            <p> Você tem {age} anos!</p>
            <hr />
         
        </div>
    )
}

export default HookUseState