import { createContext, useEffect, useState } from 'react'
import './App.css'
import ChildA from './Children/ChildA'
import UseRef from './useRef/UseRef';
import UseRefTimer from './useRef/UseRefTimer'

// First Step : createContext
const userContext = createContext()
// Second Step : Wrap all the child inside a provider (or) wrap all the child components which you want to send the props 
// Third Step : Pass Value;
// Fourth Step : Consume the porp using consumer;
const themeContext = createContext();

// useEffect will be invoked n no of times if the dependecies are not state variables or regular variables. 
// why because on every re-render old regular variable will be deleted and its new variable or instance will be created so useEffet will be invoked n no of times 




function App() {
  const [user, setUser] = useState({userName : "Cheryl"});
  const [theme, setTheme] = useState("light");
  const [items, setItems] = useState([]);
  console.log(theme)

  useEffect(()=>{
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(res => setItems(res.users))
    .catch(err=> console.log("Something is wrong",err))
  },[])

  console.log(items);

  return (
    <>
    <themeContext.Provider value={[theme,setTheme]}>
    <userContext.Provider value={user}>
      <div className={theme === "light"? "light" : "pale"}>
        {/* <ChildA /> */}
        <UseRef />
        <UseRefTimer />

        {
          items.map(item =>(
            <div className="products">
              
            <span>{item.id}</span>
            <span className="firstName">{item.firstName}</span>
            <span>{item.lastName}</span>
          
            </div>
          ))
        }
      </div>
     </userContext.Provider>
     </themeContext.Provider>
    </>
  )
}

export default App;
export {userContext};
export {themeContext};



