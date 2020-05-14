import React from "react";
import * as Icon from "react-bootstrap-icons";

function List(props) {
  return (
    <ul class="list-group">
      {props.todos.map((todo) => (
        <li
          class="list-group-item d-flex justify-content-between align-items-center align-middle"
          key={todo.id}
        >
          <input type="checkbox" />
          <span>{todo.text}</span>

          <Icon.Trash
            class="customColor"
            onClick={() => {
              props.removeTodo(todo.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export default List;
