import React, { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

// Components
import Header from "./components/Header";
import Timeline from "./components/Timeline";

// Global Styles
import GlobalStyle from "./styles/globals";

// Themes
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

// Utils
import usePersistedState from "./utils/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    "@timeline-theme",
    light
  );

  const [repos, setRepos] = useState([
    {
      name: "",
      html_url: "",
      created_at: "",
    },
  ]);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} setRepos={setRepos} />
        <Timeline repos={repos} />
      </div>
    </ThemeProvider>
  );
}

export default App;
