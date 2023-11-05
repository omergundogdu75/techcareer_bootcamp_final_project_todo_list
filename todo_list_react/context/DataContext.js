"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import TodoData from "./Data.js";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [datas, setDatas] = useState(TodoData);

  useEffect(() => {
    console.log("Data loaded: ", datas);
  }, [datas]);

  const allFilter = () => {
    setDatas(TodoData);
  };
  const todoFilter = () => {
    setDatas(TodoData.filter((data) => !data.isDone));
  };

  const doneFilter = () => {
    setDatas(TodoData.filter((data) => data.isDone));
  };

  return (
    <DataContext.Provider
      value={{ datas, setDatas, allFilter, todoFilter, doneFilter }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
