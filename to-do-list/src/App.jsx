import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <ToDoList />
      </div>
    </>
  );
}

export default App;
