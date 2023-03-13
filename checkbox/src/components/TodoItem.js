import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

// TodoList에서 todo라는 객체를 받아옴
export default function TodoItem({ todo, onCheckToggle }) {
  const { id, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <MdCheckBox
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
      </div>
    </div>
  );
}
