import React from 'react';
import { useContext } from 'react';
import { themeContext, userContext } from '../App';

const ChildC = () => {
    const userName = useContext(userContext);
    const [theme,setTheme] = useContext(themeContext);

  const  changeTheTheme = () => {
        if(theme === "light"){
            setTheme("pale")
        }
        else setTheme("light")
    }

  return (
    <div >
      Hello {userName.userName}{theme}
      <button onClick={changeTheTheme}>Theme</button>
    </div>
  )
}

export default ChildC
