import { useState, FC } from "react";
import Preferences from "../Preferences/index";
import { Mode } from "../../interface/general.types";
import Suggester from "../Suggester";
import {
  AppHeader,
  Header,
  ControlsContainer,
  ChangeModeButton,
} from "./style";

const App: FC = () => {
  const [mode, setMode] = useState<Mode>("suggester");

  const handleModeChange = () => {
    setMode((prev) => {
      if (prev === "suggester") {
        return "preferences";
      } else {
        return "suggester";
      }
    });
  };

  return (
    <AppHeader>
      <Header>Find A Film</Header>

      <ControlsContainer className="options-container">
        <ChangeModeButton onClick={handleModeChange}>
          {mode === "suggester" ? "View Preferences" : "Get Suggestions"}
        </ChangeModeButton>
      </ControlsContainer>

      {mode === "suggester" ? <Suggester mode={mode} /> : <Preferences />}
    </AppHeader>
  );
};

export default App;
