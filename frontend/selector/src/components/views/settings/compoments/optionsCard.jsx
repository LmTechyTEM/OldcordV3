import ToggleSwitch from "@oldcord/frontend-shared/components/toggleSwitch";
import Gear from "@oldcord/frontend-shared/assets/gear.svg?react";
import Info from "@oldcord/frontend-shared/assets/info.svg?react";
import "./optionsCard.css";
import { useState } from "react";
import PluginInfo from "../modals/pluginInfo";

export default function ({
  cardId,
  pluginType,
  title,
  description,
  iconType,
  isEnabled,
  disabled,
  onToggle,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function renderIcon() {
    switch (iconType) {
      case "settings":
        return (
          <button className="icon-button" onClick={() => setIsModalOpen(true)}>
            <Gear />
          </button>
        );
      case "info":
        return (
          <button className="icon-button" onClick={() => setIsModalOpen(true)}>
            <Info />
          </button>
        );
    }
  }

  return (
    <>
      <div className={`options-card ${disabled ? "disabled" : ""}`}>
        <div className="content">
          <h3 className="title">{title}</h3>
          <p className="description" title={description}>
            {description}
          </p>
        </div>
        <div className="controls">
          {renderIcon()}
          <ToggleSwitch
            isChecked={isEnabled}
            onChange={onToggle}
            uniqueId={cardId}
            disabled={disabled}
          />
        </div>
      </div>
      <PluginInfo
        isOpen={isModalOpen}
        plugin={cardId}
        type={pluginType}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
