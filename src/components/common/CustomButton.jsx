import React from "react";

function CustomButton({
  backgroundColor,
  hoverColor,
  textColor,
  hoverTextColor,
  text,
}) {
  const buttonStyle = {
    backgroundColor: backgroundColor || "#C99C33",
    color: textColor || "white",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    borderRadius: "9999px", // Large value to ensure rounded corners
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
  };

  if (hoverColor) {
    buttonStyle[":hover"] = {
      backgroundColor: hoverColor,
      color: hoverTextColor || textColor || "white",
    };
  }

  return <button style={buttonStyle}>{text}</button>;
}

export default CustomButton;
