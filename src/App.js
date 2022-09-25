import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [mode, setmode] = useState("light")
  const [textmode, settextmode] = useState("dark")
  const [alert, setalert] = useState(null)
  const reset = () => {
    setalert(null);
  }
  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const changeTheme = (color) => {
    document.body.style.backgroundColor = color;

  }
  const toggleTheme = () => {
    if (mode === "light") {
      setmode("dark");
      settextmode("light");
      document.body.style.backgroundColor = "rgb(0 3 27 / 1)";
      showAlert("dark mode has been enabled", "success")
    }
    else {
      setmode("light");
      settextmode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleTheme={toggleTheme} textmode={textmode} changeTheme={changeTheme} />
      <Alert alert={alert} reset={reset} />
      <div className="container my-3">
        <TextForm heading="Enter Your Text Here to Analyze" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
