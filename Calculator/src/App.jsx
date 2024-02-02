import React, { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calval, setCalVal] = useState("");
  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      try {
        const result = eval(calval);
        setCalVal(result);
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      const newDisplayValue = calval + buttonName;
      setCalVal(newDisplayValue);
    }
  };

  const onkeydown = (event) => {
    //console.log(event);
    if (event.key === "Enter") {
      if (event.preventDefault) {
        event.preventDefault(); // Prevent the default behavior for regular keyboard events
      }

      try {
        const result = eval(calval);
        setCalVal(result);
      } catch (error) {
        setCalVal("Error");
      }
    }

    
    if (event.key === "Delete") {
      setCalVal("");
    } 

    if (event.key === "Backspace") {
      let value = calval.slice(0, -1);
      setCalVal(value);
    } else if (!isNaN(event.key) || ['+','-','/','*'].includes(event.key)) {
      const newDisplayValue = calval + event.key;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.mainDiv}>
    <div className={styles.calculator}>
      <h2>CALCULATOR</h2>
      <Display displayValue={calval}></Display>
      <ButtonsContainer
        onButtonClick={onButtonClick}
        onkeydown={onkeydown}
      ></ButtonsContainer>
    </div>
    </div>
  );
}

export default App;
