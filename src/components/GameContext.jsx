import { createContext, useState, useContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
    const [name, setName] = useState("");
    const [bet, setBet] = useState("");

    return (
        <GameContext.Provider value={{ name, setName, bet, setBet }}>
            {children}
        </GameContext.Provider>
    );
}

function useGame() {
    return useContext(GameContext);
}

export {useGame}