"use client";
import React, { useEffect, useState } from "react";
import styles from "./todoList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDataContext } from "@/context/DataContext";
import { deleteData, update } from "@/api/TodoApi";

const TodoList = () => {
  const {
    datas,
    setDatas,
    allFilter,
    todoFilter,
    doneFilter,
    change,
    setChange,
    deleteAll,
    deleteAllDone,
  } = useDataContext();

  const handleEdit = async (data, index) => {
    const changeData = prompt("Düzenle: ", data.todoContent);

    if (changeData !== null) {
      datas[index].todoContent = changeData;
      await update(datas[index]);
    } else {
      console.log("Herhangi bir değişiklik yapılmadı");
    }
    setChange(!change);
  };

  const handleDelete = async (data, index) => {
    const confirmed = confirm("Bu öğeyi silmek istediğinize emin misiniz?");

    if (confirmed) {
      await deleteData(datas[index]);
      setChange(!change);
      console.log("Silme işlemi gerçekleşti:");
    } else {
      console.log("Silme işlemi iptal edildi:");
    }
  };

  const handleCheckboxChange = async (event, data, index) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      datas[index].done = true;
      await update(datas[index]);
      console.log(`${datas[index].todoContent} yapıldı olarak işaretlendi.`);
    } else {
      datas[index].done = false;
      await update(datas[index]);
      console.log(`${datas[index].todoContent} yapılmadı olarak işaretlendi.`);
    }
    setChange(!change);
  };

  useEffect(() => {
    console.log(datas);
  }, []);

  const handleFilter = (e) => {
    switch (e.target.id) {
      case "all":
        allFilter();
        break;
      case "done":
        doneFilter();
        break;
      case "todo":
        todoFilter();
        break;
      case "deleteAll":
        deleteAll();
        break;
      case "deleteAllDone":
        deleteAllDone();
        break;
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.filterArea}>
        <button
          className={`btn btn-secondary ${styles.filterButtons}`}
          type="button"
          id="all"
          onClick={handleFilter}
        >
          All
        </button>
        <button
          className={`btn btn-secondary ${styles.filterButtons}`}
          type="button"
          id="done"
          onClick={handleFilter}
        >
          Done
        </button>
        <button
          className={`btn btn-secondary ${styles.filterButtons}`}
          type="button"
          id="todo"
          onClick={handleFilter}
        >
          Todo
        </button>
      </div>

      <div className={styles.listTodo}>
        {datas.length !== 0 ? (
          datas.map((data, index) => (
            <div key={data.id} className={styles.item}>
              <div
                className={data.done ? styles.contentDrawText : styles.content}
              >
                {data.todoContent}
              </div>

              <div className={styles.actions}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={data.done}
                  onChange={(event) => handleCheckboxChange(event, data, index)}
                />

                <button
                  className="btn btn-transparent"
                  onClick={() => handleEdit(data, index)}
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ color: "grey", height: "3vh" }}
                  />
                </button>

                <button
                  className="btn btn-transparent"
                  onClick={() => handleDelete(data, index)}
                >
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    style={{ color: "#979320", height: "3vh" }}
                  />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              flexGrow: 1,
            }}
          >
            <div className={styles.information}>Veri bulunamadı!</div>
          </div>
        )}
      </div>

      <div className={styles.filterArea}>
        <button
          className={`btn btn-danger ${styles.deleteButtons}`}
          type="button"
          id="deleteAllDone"
          onClick={handleFilter}
        >
          Delete done tasks
        </button>
        <button
          className={`btn btn-danger ${styles.deleteButtons}`}
          type="button"
          id="deleteAll"
          onClick={handleFilter}
        >
          Delete all tasks
        </button>
      </div>
    </div>
  );
};

export default TodoList;
