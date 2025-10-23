import { useEffect, useCallback } from "react";
import "./closePart.css";
import Xmark from "@oldcord/frontend-shared/assets/xmark.svg?react";

export default function ({ onClose }) {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  return (
    <div>
      <div className="close-button-container">
        <button className="close-button" onClick={handleClose}>
          <Xmark className="x-mark" />
        </button>
        <div className="keybind-hint">ESC</div>
      </div>
    </div>
  );
}
