import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Welcome() {
  const params = useParams();

  return (
    <div className="welcome">
      <h1>Hey {params.username}!</h1>
      <h2>Welcome to ToDo Application.</h2>
      <div>
        Your ToDos: <Link to="/todos">Click Here</Link>
      </div>
    </div>
  );
}
