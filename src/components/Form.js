import React from "react";

function Form(props) {
  return (
    <form onSubmit={props.insertTodo}>
      <div class="form-group">
        <p class="customColor">What to do?</p>
        <input
          class={
            "form-control " +
            (props.todo.length > 0 ? "is-valid" : "is-invalid")
          }
          type="text"
          value={props.todo}
          onChange={props.textChange}
        />
        <div class="invalid-feedback">Please Enter Some Text</div>
        <button class="btn btn-info btn-block mt-2" disabled={!props.todo}>
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
