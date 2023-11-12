import axios from "axios";


export const getAll = () => {
    return axios.get("/api/v1.0.0/todo/all");
  };

  export const save = (body) => {
    return axios.post("/api/v1.0.0/todo/save",body);
  };
  
  export const update = (body) => {
    return axios.put("/api/v1.0.0/todo/update",body);
  };
  
  export const deleteData = (body) => {
    return axios.post("/api/v1.0.0/todo/delete",body);
  };
  
  export const deleteAllData = () => {
    return axios.post("/api/v1.0.0/todo/deleteAll");
  };

  export const deleteAllDoneData = () => {
    return axios.post("/api/v1.0.0/todo/doneDelete");
  };