"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{useState} from "react";
import styles from "./header.module.css";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useDataContext } from "../../context/DataContext";
import { save } from "@/api/TodoApi";

const Header = () => {
  const {datas, setDatas,change, setChange} = useDataContext();
  const [inputValue, setInputValue] = useState(""); // Boş bir değerle başlatın

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Input değerini state'e kaydedin
  };

  const handleAddItem = async () => {
    if (inputValue.trim() !== "") {
      const newData = {
        todoContent: inputValue.trim(),
        isDone: false
      };

      const saveData = await save(newData).then(res => {
        setChange(!change);
        setInputValue("")
        alert("Eklenen değer: " + res.data.todoContent);
      });
  
    } else {
      alert("Eklemek için bir değer girmelisiniz.");
    }
  };

  return (
    <div className={styles.mainContent}>
    
      <div className={styles.inputWithIcon}>
        <FontAwesomeIcon icon={faList} className={styles.iconTodo}/>
        <input
          id="inputTodo"
          name="inputTodo"
          className={styles.inputTodo}
          type="text"
          value={inputValue}
          placeholder="New Todo"
          onChange={handleInputChange} // Input değiştiğinde tetiklenir
        />
      </div>

      <button
        className={"btn btn-secondary " + styles.addTodoBtn}
        type="button"
        onClick={handleAddItem} 
      >
        Add
      </button>
    </div>
  );
};

export default Header;
