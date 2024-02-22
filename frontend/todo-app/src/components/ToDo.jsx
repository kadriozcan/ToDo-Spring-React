import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getAllTodosApi,
  getTodoByUsernameAndId,
  updateTodoApi,
} from "../api/TodoApiService";
import { useAuth } from "./security/AuthContext";

export default function ToDo() {
  const { id } = useParams();
  const authContext = useAuth();
  const username = authContext.username;

  const [description, setDescription] = useState("");

  useEffect(() => fetchTodos(), [id]);

  function fetchTodos() {
    getTodoByUsernameAndId(username, id).then((response) => {
      setDescription(response.data.description);
    });
  }

  return (
    <div className="container">
      <h1>Enter Todo Details!</h1>
      <div>description: {description}</div>
    </div>
  );
}
