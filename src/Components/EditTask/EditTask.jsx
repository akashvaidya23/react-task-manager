import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import style from "./EditTask.module.css";

const EditTask = () => {
  const taskID = useParams();
  let id = taskID.taskId;
  let [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  let task = [...tasks][id];

  let [title, setTitle] = useState(task.title);
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  let [desc, setDesc] = useState(task.desc);
  const descChangeHandler = (e) => {
    setDesc(e.target.value);
  };

  let [date, setDate] = useState(task.due_date);
  const datechangeHandler = (e) => {
    setDate(e.target.value);
  };

  const updateHandler = () => {
    if (!title || !desc || !date) {
      alert("Please fill all the fields");
      return false;
    } else {
      let oldtasks = [...tasks];
      oldtasks[id].title = title;
      oldtasks[id].desc = desc;
      oldtasks[id].due_date = date;
      console.log(oldtasks);
      setTasks(oldtasks);
      alert("Task updated successfully");
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className={style.main}>
        <div className={style.inputs}>
          <h4 style={{ textAlign: "center" }}>Edit Task</h4>
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
                updateHandler();
              }}
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTask;
