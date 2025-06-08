import { createContext, useState } from 'react'
import './App.css'
import ChildA from './Children/ChildA'

// First Step : createContext
const userContext = createContext()
// Second Step : Wrap all the child inside a provider (or) wrap all the child components which you want to send the props 
// Third Step : Pass Value;
// Fourth Step : Consume the porp using consumer;
const themeContext = createContext();



function App() {
  const [user, setUser] = useState({userName : "Cheryl"});
  const [theme, setTheme] = useState("light");
  console.log(theme)

  return (
    <>
    <themeContext.Provider value={[theme,setTheme]}>
    <userContext.Provider value={user}>
      <div className={theme === "light"? "light" : "pale"}>
        <ChildA />
      </div>
     </userContext.Provider>
     </themeContext.Provider>
    </>
  )
}

export default App;
export {userContext};
export {themeContext};



