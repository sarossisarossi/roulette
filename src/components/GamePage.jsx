import { useGame } from "./GameContext.jsx";

function GamePage() {
    const { name, bet } = useGame();

    return (
        <div>
            <h1>Bienvenido, {name}!</h1>
            <p>Has apostado ${bet}</p>
            <p>Aquí iría el juego...</p>
        </div>
    );
}

export default GamePage;