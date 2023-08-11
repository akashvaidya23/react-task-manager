import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import style from "./EditTask.module.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";

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

  const defDate = moment(task.due_date).toDate();
  let [date, setDate] = useState(defDate);
  const dateChangeHandler = (date) => {
    setDate(date);
  };

  const updateHandler = () => {
    if (!title || !desc || !date) {
      alert("Please fill all the fields");
      return false;
    } else {
      let oldtasks = [...tasks];
      oldtasks[id].title = title;
      oldtasks[id].desc = desc;
      oldtasks[id].due_date = moment(date).format("DD/MM/YYYY");
      setTasks(oldtasks);
      toast.success("Task updated successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
            <DatePicker
              selected={date}
              onChange={dateChangeHandler}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select due date"
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};

export default EditTask;
