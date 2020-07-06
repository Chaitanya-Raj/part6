const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      if (state) clearTimeout(state.timerID);
      showNotification(action.notification);
      let x = setTimeout(() => hideNotification(), action.timer * 1000);
      return { content: action.notification, timerID: x };
    default:
      return state;
  }
};

export const setNotification = (notification, timer = 5) => {
  return {
    type: "SET_NOTIFICATION",
    notification,
    timer,
  };
};

export const showNotification = () => {
  document.getElementById("notification").style.display = "block";
};

export const hideNotification = () => {
  document.getElementById("notification").style.display = "none";
};

export default notificationReducer;
