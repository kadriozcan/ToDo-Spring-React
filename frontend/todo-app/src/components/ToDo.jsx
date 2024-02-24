import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createTodoApi,
  getTodoByUsernameAndId,
  updateTodoApi,
} from "../api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { findAllByTestId } from "@testing-library/react";

export default function ToDo() {
  const { id } = useParams();
  const authContext = useAuth();
  const username = authContext.username;

  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => fetchTodos(), [id]);

  function fetchTodos() {
    if (id != -1) {
      getTodoByUsernameAndId(username, id)
        .then((response) => {
          setDescription(response.data.description);
          setTargetDate(response.data.targetDate);
        })
        .catch((error) => console.log(error));
    }
  }

  function onSubmit(values) {
    const todo = {
      id: id,
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: false,
    };

    if (id == -1) {
      createTodoApi(username, todo).then((response) => {
        navigate("/todos");
      });
    } else {
      updateTodoApi(username, id, todo)
        .then((response) => {
          navigate("/todos");
        })
        .catch((error) => console.log(error));
    }
  }

  function validate(values) {
    let errors = {};
    if (values.description.length < 5) {
      errors.description = "Enter at least 5 characters!";
    }
    if (values.targetDate == null || values.targetDate === "") {
      errors.targetDate = "Enter a target date!";
    }

    return errors;
  }

  return (
    <div className="container">
      <h1>Enter Todo Details!</h1>
      <div>
        <Formik
          initialValues={{ description, targetDate }}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validate={validate}
          validateOnChange={findAllByTestId}
          validateOnBlur={false}
        >
          {(props) => (
            <div>
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-warning"
              />
              <ErrorMessage
                name="targetDate"
                component="div"
                className="alert alert-warning"
              />
              <Form>
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="description"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Target</label>
                  <Field
                    type="date"
                    className="form-control"
                    name="targetDate"
                  />
                </fieldset>
                <div>
                  <button className="btn btn-success m-5" type="submit">
                    Save
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
