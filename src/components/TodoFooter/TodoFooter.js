import React from "react";
import "./TodoFooter.css";
import { Link } from "react-router-dom";

function TodoFooter({ numberOfIncompleteTasks, opacity = 1 }) {
  return (
    <div className="todo-footer">
      <p style={{ opacity }} data-testid="para">
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
      <Link to="/followers">Followers</Link>
    </div>
  );
}

export default TodoFooter;
