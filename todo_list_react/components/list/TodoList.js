"use client";
import React, { useEffect, useState } from "react";
import styles from "./todoList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDataContext } from "@/context/DataContext";

const TodoList = () => {
  const { datas, setDatas,allFilter,todoFilter,doneFilter } = useDataContext();

  function handleEditClick(data, index) {
    const change = prompt("Düzenle: ", data.todoContent);

    if (change !== null) {
      const editDatas = [...datas]; // datas dizisinin bir kopyasını oluştur
      editDatas[index].todoContent = change;
      setDatas(editDatas);
      alert("Edit işlemi gerçekleşti:", editDatas);
    } else {
      console.log("Herhangi bir değişiklik yapılmadı");
    }
    // Edit işlemi burada gerçekleştirilir
  }

  function handleDeleteClick(data) {
    const confirmed = confirm("Bu öğeyi silmek istediğinize emin misiniz?");
    if (confirmed) {
      // Silme işlemi burada gerçekleştirilir
      const deleteDatas = datas.filter((item) => item.id !== data.id);
      setDatas(deleteDatas);
      alert("Silme işlemi gerçekleşti:", deleteDatas);
    } else {
      alert("Silme işlemi iptal edildi:");
    }
  }

  function handleCheckboxChange(event, data, index) {
    // Checkbox'ın yeni durumunu kontrol etmek, için event.target.checked'i kullanabilirsiniz.
    const isChecked = event.target.checked;
    const updatedDatas = [...datas]; // datas dizisinin bir kopyasını oluştur

    // isChecked değerine göre istediğiniz işlemleri yapabilirsiniz.
    if (isChecked) {
      // Checkbox işaretlendiğinde yapılacak işlemler
      updatedDatas[index].isDone = true;
      console.log("Checkbox işaretlendi.");
    } else {
      updatedDatas[index].isDone = false;
      // Checkbox işareti kaldırıldığında yapılacak işlemler
      console.log("Checkbox işareti kaldırıldı.");
    }
    setDatas(updatedDatas); // Güncellenmiş diziyi ayarla
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
              className={data.isDone ? styles.contentDrawText : styles.content}
            >
              {data.todoContent}
            </div>

            {/* //todo actions */}
            <div className={styles.actions}>
              {/* //checkbox */}
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={data.isDone}
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
                onClick={() => handleDeleteClick(data)}
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
        >
          Delete done tasks
        </button>
        <button
          className={"btn btn-danger " + styles.deleteButtons}
          type="button"
        >
          Delete all tasks
        </button>
      </div>
    </div>
  );
};

export default TodoList;
