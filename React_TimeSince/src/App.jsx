import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, settime] = useState("");
  function handledate() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime = `${hours}:${minutes}:${seconds}`;
    settime(formattedTime);
  }

  useEffect(() => {
    setInterval(handledate, 1000);
  }, []);

  return (
    <>
      <h1>{time}</h1>
    </>
  );
}

export default App;
