import { useState } from "react";
import { GameProvider } from "./components/GameContext";
import NameInput from "./components/NameInput";
import BetInput from "./components/BetInput";
import GamePage from "./components/GamePage";

function App() {
    const [step, setStep] = useState(1);

    return (
        <GameProvider>
            {step === 1 && <NameInput onNext={() => setStep(2)} />}
            {step === 2 && <BetInput onNext={() => setStep(3)} />}
            {step === 3 && <GamePage />}
        </GameProvider>
    );
}

export default App;