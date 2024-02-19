import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Welcome() {
  const params = useParams();

  const [message, setMessage] = useState(null);

  function getHelloWorld() {
    console.log(axios.get("http://localhost:8080/hello"));
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
