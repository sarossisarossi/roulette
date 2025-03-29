import { useState } from "react";
import { useGame } from "./GameContext";

function NameInput({ onNext }) {
    const [input, setInput] = useState("");
    const { setName } = useGame();

    const handleSubmit = () => {
        setName(input);
        onNext();  // Avanza a la siguiente pantalla
    };

    return (
        <div>
            <h1>¿Cuál es tu nombre?</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Siguiente</button>
        </div>
    );
}

export default NameInput;