import { useState } from "react";
import { useGame } from "./GameContext";

function BetInput({ onNext }) {
    const [input, setInput] = useState("");
    const { name, setBet } = useGame();

    const handleSubmit = () => {
        setBet(input);
        onNext();  // Avanza al juego
    };

    return (
        <div>
            <h1>¡Hola, {name}! ¿Cuánto quieres apostar?</h1>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Jugar</button>
        </div>
    );
}

export default BetInput;