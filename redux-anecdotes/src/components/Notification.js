import React from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((store) =>
    store.notification ? store.notification.content : ""
  );
  const style = {
    display: "none",
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: "10px",
  };

  return (
    <div style={style} id="notification">
      {notification}
    </div>
  );
};

export default Notification;
