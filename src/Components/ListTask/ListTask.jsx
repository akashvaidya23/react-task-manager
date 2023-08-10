import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import style from "./ListTask.module.css";
import { useNavigate } from "react-router-dom";

const ListTask = () => {
  const navigate = useNavigate();

  let [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setFilteredTasks(tasks);
  }, [tasks]);

  const deleteTask = (id) => {
    let listTasks = [...tasks];
    console.log("deleted", listTasks);
    listTasks.splice(id, 1);
    setTasks(listTasks);
  };

  const editTask = (id) => {
    navigate(`/task/${id}`);
  };

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const searchHandler = (e) => {
    let text = e.target.value;
    const filtered_tasks = tasks.filter((name) => {
      return name.title.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredTasks(filtered_tasks);
  };

  return (
    <>
      <div>
        <h4 style={{ textAlign: "center" }}>List Tasks</h4>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Task"
          style={{ float: "right", marginRight: "230px" }}
          onChange={searchHandler}
        />
      </div>
      <br />
      <br />
      <Table striped className={style.main}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", textAlign: "center" }}>
              Sr.No.
            </th>
            <th style={{ border: "1px solid black", textAlign: "center" }}>
              Title
            </th>
            <th style={{ border: "1px solid black", textAlign: "center" }}>
              Description
            </th>
            <th style={{ border: "1px solid black", textAlign: "center" }}>
              Due Date
            </th>
            <th style={{ border: "1px solid black", textAlign: "center" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => {
            return (
              <tr key={index}>
                <td style={{ border: "1px solid black", textAlign: "center" }}>
                  {index + 1}
                </td>
                <td style={{ border: "1px solid black", textAlign: "center" }}>
                  {task.title}
                </td>
                <td style={{ border: "1px solid black", textAlign: "center" }}>
                  {task.desc}
                </td>
                <td style={{ border: "1px solid black", textAlign: "center" }}>
                  {task.due_date}
                </td>
                <td style={{ border: "1px solid black", textAlign: "center" }}>
                  <Button
                    variant="success"
                    onClick={() => {
                      editTask(index);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    style={{ marginLeft: "5px" }}
                    onClick={() => {
                      deleteTask(index);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ListTask;
