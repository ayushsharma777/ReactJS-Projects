import React, { useEffect, useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(()=>{
      setTime( new Date());
    },1000)

    return()=>{
      clearInterval(timerId);
    }
  },[]);
  return (
    <div>
      <p>
        This is the current time: {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default CurrentTime;
