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
    deleteAllDone
  } = useDataContext();

  async function handleEditClick(data, index) {
    const changeData = prompt("Düzenle: ", data.todoContent);

    if (changeData !== null) {
      datas[index].todoContent = changeData;
      await update(datas[index]);
    } else {
      console.log("Herhangi bir değişiklik yapılmadı");
    }
    setChange(!change);
  }

  async function handleDeleteClick(data, index) {
    console.log(datas[index]);
    const confirmed = confirm("Bu öğeyi silmek istediğinize emin misiniz?");
    console.log(confirmed);

    if (confirmed) {
      // Silme işlemi burada gerçekleştirilir
      await deleteData(datas[index]);
      setChange(!change);
      alert("Silme işlemi gerçekleşti:");
    } else {
      alert("Silme işlemi iptal edildi:");
    }
  }

  async function handleCheckboxChange(event, data, index) {
    // Checkbox'ın yeni durumunu kontrol etmek, için event.target.checked'i kullanabilirsiniz.
    const isChecked = event.target.checked;

    // isChecked değerine göre istediğiniz işlemleri yapabilirsiniz.
    if (isChecked) {
      datas[index].done = true;
      await update(datas[index]);
      alert(datas[index].todoContent + " yapıldı olarak işaretlendi.");
    } else {
      datas[index].done = false;
      await update(datas[index]);
      alert(datas[index].todoContent + " yapılmadı olarak işaretlendi.");
    }
    setChange(!change); // Güncellenmiş diziyi ayarla
  }

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
      {/* Filter Buttons */}
      <div className={styles.filterArea}>
        <button
          className={"btn btn-secondary " + styles.filterButtons}
          type="button"
          id="all"
          onClick={handleFilter}
        >
          All
        </button>
        <button
          className={"btn btn-secondary " + styles.filterButtons}
          type="button"
          id="done"
          onClick={handleFilter}
        >
          Done
        </button>
        <button
          className={"btn btn-secondary " + styles.filterButtons}
          type="button"
          id="todo"
          onClick={handleFilter}
        >
          Todo
        </button>
      </div>

      {/* List */}
      <div className={styles.listTodo}>
        {datas.map((data, index) => (
          <div key={data.id} className={styles.item}>
            {/*  todoContent text */}
            <div
              className={data.done ? styles.contentDrawText : styles.content}
            >
              {data.todoContent}
            </div>

            {/* //todo actions */}
            <div className={styles.actions}>
              {/* //checkbox */}
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={data.done}
                onChange={(event) => handleCheckboxChange(event, data, index)}
              />

              {/* //Edit */}
              <button
                className="btn btn-transparent"
                onClick={() => handleEditClick(data, index)}
              >
                {" "}
                <FontAwesomeIcon
                  icon={faEdit}
                  style={{ color: "grey", height: "3vh" }}
                />
              </button>

              {/* //delete */}
              <button
                className="btn btn-transparent"
                onClick={() => handleDeleteClick(data, index)}
              >
                {" "}
                <FontAwesomeIcon
                  icon={faTrashCan}
                  style={{ color: "#979320", height: "3vh" }}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* //Delete Buttons */}
      <div className={styles.filterArea}>
        <button
          className={"btn btn-danger " + styles.deleteButtons}
          type="button"
          id="deleteAllDone"
          onClick={handleFilter}
        >
          Delete done tasks
        </button>
        <button
          className={"btn btn-danger " + styles.deleteButtons}
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
