import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getHelloPathVariable } from "../api/HelloWorldApiService";

export default function Welcome() {
  const params = useParams();

  const [message, setMessage] = useState(null);

  function getHelloWorld() {
    getHelloPathVariable("Kadri")
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
