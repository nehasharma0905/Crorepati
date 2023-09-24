// MyContext.js
import React, { createContext, useState, useContext } from "react";

// Create a context instance
export const Context = createContext();

// Create a context provider component
export function ContextProvider({ children }) {
  const [username, setUsername] = useState("random_1000");
  const [quizData, setQuizData] = useState({});
  const [openGameOver, setOpenGameOver] = useState(false);

  return (
    <Context.Provider
      value={{
        username,
        setUsername,
        quizData,
        setQuizData,
        openGameOver,
        setOpenGameOver,
      }}
    >
      {children}
    </Context.Provider>
  );
}

// Create a custom hook to access the context
