// import About from "./About";
import { useState } from "react";
import Navbar from "./Navbar";
 import TextForm from "./TextForm";
 import Alert from "./Alert";
 import {Routes,Route} from 'react-router-dom'
 import About from "./About"
 function App() {
  const[alert,setAlert]=useState(null)
  const[mode,setMode]=useState('light');
  
  let togglemode=()=>{
          if (mode==='light') {
            setMode('dark');
            showAlert("Success:Dark mode has been enabled");
          }
          else{
            setMode('light');
            showAlert("Success:Light mode has been enabled");
          }
  }
  let showAlert=(msg)=>{
      setAlert(msg);
      setTimeout(() => {
        setAlert(null)
      },1000);
  }
  return (
<>
<Navbar mode={mode} click={togglemode}/>
<Alert alert={alert}/>
 <Routes>
  <Route  path="/" element Component={() =><TextForm title={"Enter the text you want to analyze"} mode={mode}/> }></Route>
  <Route  path="/about" Component={()=><About mode={mode}/>}/>
</Routes>  
</>
); 
}   
//<TextForm title={"Enter the text you want to analyze"} alert={showAlert} mode={mode}/> 
export default App;

