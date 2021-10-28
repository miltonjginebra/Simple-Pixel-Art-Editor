import React from "react";
import UserContext from "./UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faFillDrip,
  faEraser,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import "bootstrap/dist/css/bootstrap.min.css";

const Toolbar = () => {
  const ctx = React.useContext(UserContext);

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  const handleColorChange = (color) => {
    ctx.selectedColor = color;
  };

  const handleToolChange = (tool) => {
    ctx.selectedTool = tool;
  };

  return (
    <>
      {windowWidth > 600 ? (
        <div
          className="toolbar d-flex flex-column vh-100 bg-dark "
          style={{ width: "4.5rem" }}
        >
          <ul className="nav text-center h-100">
            <div>
              <Tooltip title="Pencil" placement="right">
                <IconButton
                  onClick={(e) => {
                    handleToolChange("pencil");
                  }}
                >
                  <li className="nav-item d-flex justify-content-center mt-2">
                    <div
                      className="bg-primary"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "0.8rem",
                      }}
                    >
                      <FontAwesomeIcon className={"mt-3"} icon={faPencilAlt} />
                    </div>
                  </li>
                </IconButton>
              </Tooltip>

              <Tooltip title="Eraser" placement="right">
                <IconButton
                  onClick={(e) => {
                    handleToolChange("eraser");
                  }}
                >
                  <li className="nav-item d-flex justify-content-center mt-2">
                    <div
                      className="bg-primary"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "0.8rem",
                      }}
                    >
                      <FontAwesomeIcon className={"mt-3"} icon={faEraser} />
                    </div>
                  </li>
                </IconButton>
              </Tooltip>

              <Tooltip title="Bucket" placement="right">
                <IconButton
                  onClick={(e) => {
                    handleToolChange("fill");
                  }}
                >
                  <li className="nav-item d-flex justify-content-center mt-2">
                    <div
                      className="bg-primary"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "0.8rem",
                      }}
                    >
                      <FontAwesomeIcon className={"mt-3"} icon={faFillDrip} />
                    </div>
                  </li>
                </IconButton>
              </Tooltip>

              <Tooltip title="Color" placement="right">
                <IconButton>
                  <li className="nav-item d-flex justify-content-center mt-2">
                    <input
                      type="color"
                      onChange={(e) => handleColorChange(e.target.value)}
                    />
                  </li>
                </IconButton>
              </Tooltip>
            </div>

            <div className="mt-auto mb-3">
              <Tooltip className="" title="Account" placement="right">
                <IconButton>
                  <li className="nav-item d-flex justify-content-center mt-2">
                    <div
                      className="bg-primary"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "0.8rem",
                      }}
                    >
                      <FontAwesomeIcon className={"mt-3"} icon={faUser} />
                    </div>
                  </li>
                </IconButton>
              </Tooltip>
            </div>
          </ul>
        </div>
      ) : (
        <Box
          sx={{ width: 500, position: "fixed", bottom: 0, left: 0, right: 0 }}
        >
          <BottomNavigation
            showLabels
            value={value}
            className="bg-dark vw-100"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Pencil"
              icon={<FontAwesomeIcon icon={faPencilAlt} />}
              onClick={(e) => {
                handleToolChange("pencil");
              }}
            />
            <BottomNavigationAction
              label="Eraser"
              icon={<FontAwesomeIcon icon={faEraser} />}
              onClick={(e) => {
                handleToolChange("eraser");
              }}
            />
            <BottomNavigationAction
              label="Bucket"
              icon={<FontAwesomeIcon icon={faFillDrip} />}
              onClick={(e) => {
                handleToolChange("fill");
              }}
            />
            <BottomNavigationAction
              icon={
                <input
                  type="color"
                  onChange={(e) => handleColorChange(e.target.value)}
                />
              }
            />
          </BottomNavigation>
        </Box>
      )}
    </>
  );
};

export default Toolbar;
