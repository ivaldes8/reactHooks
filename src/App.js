import logo from './logo.svg';
import React from 'react'
import './App.css';
import UseState from './components/useState'
import UseEffect from './components/useEffect';
import UseContext from './components/useContext';
import UseRef from './components/useRef';
import UseReducer from './components/useReducer';
import UseMemo from './components/useMemo';
import UseCallback from './components/useCallback';
import UseLayoutEffect from './components/useLayoutEffect';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
}

export const  ThemeContext = React.createContext(themes.light)

function App() {
  return (
    <div className="App">
      <UseState/>
      <hr/>
      <UseEffect/>
      <hr/>
      <ThemeContext.Provider value ={ themes.dark}>
        <UseContext/>
      </ThemeContext.Provider>
      <hr/>
      <UseRef/>
      <hr/>
      <UseReducer/>
      <hr/>
      <UseMemo/>
      <hr/>
      <UseCallback/>
      <hr/>
      <UseLayoutEffect/>
    </div>
  );
}

export default App;
