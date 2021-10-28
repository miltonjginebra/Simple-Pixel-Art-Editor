import React from "react";
import UserContext from "./UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUndoAlt,
  faTrashAlt,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { exportComponentAsPNG } from "react-component-export-image";

const Canvas = () => {
  const ctx = React.useContext(UserContext);
  let height = 16;
  let width = 16;

  const canvasRef = React.useRef();
  const [steps, setSteps] = React.useState([]);
  const [selectedTd, setSelectedTd] = React.useState(null);

  const rgb2hex = (rgb) => {
    if (rgb) {
      return `#${rgb
        .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
        .slice(1)
        .map((n) => parseInt(n, 10).toString(16).padStart(2, "0"))
        .join("")}`;
    }
  };

  const draw = (e) => {
    let mouseDown = 0;
    if (e.nativeEvent.which === 1) {
      ++mouseDown;
      console.log("Mouse Down");
    }
    if (mouseDown) {
      if (ctx.selectedColor.substring(1).length === 3) {
        ctx.selectedColor += ctx.selectedColor.substring(1);
      }

      let step = {
        row: e.target.parentNode.getAttribute("row"),
        col: e.target.getAttribute("col"),
        last_color: rgb2hex(e.target.style.backgroundColor),
        new_color: ctx.selectedColor,
      };

      if (
        ctx.selectedTool === "pencil" &&
        rgb2hex(e.target.style.backgroundColor) !== ctx.selectedColor
      ) {
        e.target.style.backgroundColor = ctx.selectedColor;
        setSteps([...steps, step]);
      } else if (
        ctx.selectedTool === "eraser" &&
        e.target.style.backgroundColor !== ""
      ) {
        e.target.style.backgroundColor = "";
        setSteps([...steps, step]);
      } else if (ctx.selectedTool === "fill") {
        console.log("Row: " + e.target.parentNode.getAttribute("row"));
        console.log("Col: " + e.target.getAttribute("col"));
        let fill = (row, col, last_color, new_color) => {
          if (row < 0 || row >= height || col < 0 || col >= width) {
            return;
          }

          let findRow = document
            .querySelector(".canvas")
            .querySelector('[row="' + row + '"]');

          let findCol = findRow.querySelector('[col="' + col + '"]');

          if (rgb2hex(findCol.style.backgroundColor) === last_color) {
            findCol.style.backgroundColor = new_color;
            fill(row - 1, col, last_color, new_color);
            fill(row + 1, col, last_color, new_color);
            fill(row, col - 1, last_color, new_color);
            fill(row, col + 1, last_color, new_color);
          }
        };

        fill(
          e.target.parentNode.getAttribute("row"),
          e.target.getAttribute("col"),
          rgb2hex(e.target.style.backgroundColor),
          ctx.selectedColor
        );
      }
    }
  };

  let cols = [];
  for (let i = 1; i <= width; i++) {
    let col = (
      <td
        key={i}
        col={i - 1}
        className={i % 2 === 0 ? "td-cell even-cell" : "td-cell odd-cell"}
        onMouseDown={(e) => {
          setSelectedTd(e.target);
          draw(e);
        }}
        onMouseEnter={(e) => {
          draw(e);
        }}
      ></td>
    );
    cols.push(col);
  }

  let rows = [];
  for (let i = 1; i <= height; i++) {
    let row = (
      <tr key={i} row={i - 1}>
        {cols}
      </tr>
    );
    rows.push(row);
  }

  const undo = () => {
    if (steps.length > 0) {
      let findRow = document
        .querySelector(".canvas")
        .querySelector('[row="' + steps[steps.length - 1].row + '"]');

      let findCol = findRow.querySelector(
        '[col="' + steps[steps.length - 1].col + '"]'
      );

      steps[steps.length - 1].last_color
        ? (findCol.style.backgroundColor = steps[steps.length - 1].last_color)
        : (findCol.style.backgroundColor = "");

      let new_arr = steps.slice(0, steps.length - 1);
      setSteps(new_arr);
    }
  };

  const clear = () => {
    let all_cells = document
      .querySelector(".canvas")
      .querySelectorAll(".td-cell");
    all_cells.forEach((cell) => {
      cell.style.backgroundColor = "";
    });
  };
  const save = () => {
    exportComponentAsPNG(canvasRef);
  };

  return (
    <>
      <div className="min-vh-100 bg-secondary">
        <div className="canvas-section">
          <div className="canvas-container ">
            <table id="canvas_background" className="canvas-background">
              <tbody>{rows}</tbody>
            </table>
            <table className="canvas" ref={canvasRef}>
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
        <div className="button-controls">
          <Button variant="warning" className="m-2" onClick={(e) => undo(e)}>
            <FontAwesomeIcon icon={faUndoAlt} />
          </Button>
          <Button variant="danger" className="m-2" onClick={(e) => clear(e)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </Button>
          <Button variant="success" className="m-2" onClick={(e) => save(e)}>
            <FontAwesomeIcon icon={faSave} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Canvas;
