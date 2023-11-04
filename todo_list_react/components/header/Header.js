import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./header.module.css";
import { faList } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.title}>
        <h3>TodoInput</h3>
      </div>

      <div className={styles.inputWithIcon}>
        <FontAwesomeIcon icon={faList} className={styles.iconTodo}/>
        <input
          id="inputTodo"
          name="inputTodo"
          className={styles.inputTodo}
          type="text"
          placeholder="New Todo"
        />
      </div>

      <button
        className={"btn btn-secondary " + styles.addTodoBtn}
        type="button"
      >
        Secondary
      </button>
    </div>
  );
};

export default Header;
