"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { deleteAllData, getAll, deleteAllDoneData } from "@/api/TodoApi.js";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [datas, setDatas] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [change, setChange] = useState(false);

  const fetchDatas = async () => {
    const allData = await getAll().then((data) => {
      setDatas(data.data);
      setCopyData(data.data);
    });
  };

  useEffect(() => {
    fetchDatas();
  }, [change]);

  const allFilter = () => {
    fetchDatas();
    console.log(datas);
  };
  const todoFilter = () => {
    setDatas(copyData.filter((data) => !data.done));
    console.log(datas);
  };

  const doneFilter = () => {
    setDatas(copyData.filter((data) => data.done));
    console.log(datas);
  };

  const deleteAll = async () => {
    await deleteAllData();
    setChange(!change);
    alert("All data deleted!")
  };

  const deleteAllDone = async () => {
    await deleteAllDoneData();
    setChange(!change);
    alert("All done data deleted!")

  };

  return (
    <DataContext.Provider
      value={{
        datas,
        setDatas,
        allFilter,
        todoFilter,
        doneFilter,
        change,
        setChange,
        deleteAll,
        deleteAllDone,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
