import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getHelloPathVariable } from "../api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";

export default function Welcome() {
  const params = useParams();

  const [message, setMessage] = useState(null);

  const authContext = useAuth();

  function getHelloWorld() {
    getHelloPathVariable("Kadri", authContext.token)
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));
  }

  function successfulResponse(response) {
    console.log(response);
    setMessage(response.data);
  }

  function errorResponse(error) {
    console.log(error);
  }

  return (
    <div className="welcome">
      <h1>Hey {params.username}!</h1>
      <h2>Welcome to ToDo Application.</h2>
      <div>
        Your ToDos: <Link to="/todos">Click Here</Link>
      </div>
      <div>
        <button className="btn btn-success" onClick={getHelloWorld}>
          Call Hello World
        </button>
      </div>
      <div className="text-info">{message}</div>
    </div>
  );
}
