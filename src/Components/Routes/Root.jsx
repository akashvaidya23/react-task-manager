import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="light">
        <Container>
          <Navbar.Brand>
            <b>Task Manager</b>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link
              style={{
                textDecoration: "none",
                marginLeft: "20px",
                color: "#eee",
              }}
              to={`/newTask`}
            >
              New Task
            </Link>
            <Link
              style={{
                textDecoration: "none",
                marginLeft: "20px",
                color: "#eee",
              }}
              to={`/`}
            >
              List Task
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Root;
