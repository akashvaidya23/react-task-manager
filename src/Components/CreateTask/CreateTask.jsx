import Button from "react-bootstrap/Button";
import style from "./CreateTask.module.css";
import { useEffect, useState } from "react";

const CreateTask = () => {
  let [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [title, setTitle] = useState("");
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const [desc, setDesc] = useState("");
  const descChangeHandler = (e) => {
    setDesc(e.target.value);
  };

  const [date, setDate] = useState("");
  const datechangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitTask = () => {
    let new_tasks = [...tasks];
    if (!title || !desc || !date) {
      alert("Kindly fill all the details");
    } else {
      let details = {
        title: title,
        desc: desc,
        due_date: date,
      };
      new_tasks.push(details);
      setTasks(new_tasks);
      setTitle("");
      setDesc("");
      setDate("");
      alert("Task added successfully");
    }
  };

  return (
    <div className={style.main}>
      <div className={style.inputs}>
        <h4 style={{ textAlign: "center" }}>Create New Task</h4>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            onChange={titleChangeHandler}
            type="text"
            id="title"
            name="title"
            placeholder="Enter task title"
            value={title}
            style={{ width: "300px" }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            onChange={descChangeHandler}
            id="description"
            name="description"
            placeholder="Enter due date"
            rows="4"
            cols="25"
            value={desc}
            style={{ width: "300px" }}
          ></textarea>
        </div>
        <br />
        <div>
          <label htmlFor="due_date">Due Date</label>
          <br />
          <input
            onChange={datechangeHandler}
            id="due_date"
            name="due_date"
            type="date"
            value={date}
            style={{ width: "300px" }}
          />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <Button
            variant="primary"
            onClick={() => {
              submitTask();
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
