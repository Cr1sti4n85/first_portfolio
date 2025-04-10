import "./App.css";
import "./index.css";
import LoadingScreen from "./components/LoadingScreen";
import { useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  return (
    <>{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}</>
  );
}

export default App;
