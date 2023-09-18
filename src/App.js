// import SecondPage from "./components/SecondPage";
// import ThirdPage from "./components/ThirdPage";
// import Industry from "./components/Industry";
// import AddRemoveInputField from "./components/AddRemoveinputfield";
// import Calculator from "./components/Calculator";
// import About from "./components/About";
import Navbar from "./components/Navbar";
// import New from "./components/New";
import React, { useState } from 'react';
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


 const toggleMode = ()=> {
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark Mode Has Been Enabled", "success");
    // document.title = 'TextUtils - Dark Mode';
    // setInterval(() => {
    //   document.title = 'TextUtils is amazing';
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'Install TextUtils Now';
    // }, 1500);
  }else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Has Been Enabled", "success");
    // document.title = 'TextUtils - Light Mode';
  }
}
  return (
  <>
    {/* <SecondPage />  */}
    {/* <ThirdPage /> */}
    {/* <Industry /> */}
    {/* <AddRemoveInputField /> */}
     {/* <div className="App">
      <h1>React Sidebar with Dropdowns</h1>
      <div className="content"> */}
        {/* <Calculator /> */}
        {/* Add your main content here */}
      {/* </div> */}
    {/* </div> */}
    {/* <New /> */}
  {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="conatiner my-3">
            {/* <Routes>
              <Route path="/" element={ }/>
              <Route path="about" element={<About />} />
            </Routes> */}
            <TextForm showAlert={showAlert} heading = "Enter text to analyze below" mode={mode}/>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;