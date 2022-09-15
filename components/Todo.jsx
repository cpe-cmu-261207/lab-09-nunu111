import React, { useContext, useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function Todo(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { selTheme } = useContext(ThemeContext);
  return (
    <div
      className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseOut={() => {
        setIsMouseOver(false);
      }}
      style={{ color: selTheme.foreground }}
    >
      <span
        className="me-auto"
        style={props.completed ? { textDecoration: "line-through" } : null}
      >
        {props.title}
      </span>
      {isMouseOver && (
        <>
          <button className="btn btn-success" onClick={() => props.onMark()}>
            <IconCheck />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => props.onmoveUp()}
          >
            <IconArrowUp />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => props.onmoveDown()}
          >
            <IconArrowDown />
          </button>
          <button className="btn btn-danger" onClick={() => props.onDelete()}>
            <IconTrash />
          </button>
        </>
      )}
    </div>
  );
}
