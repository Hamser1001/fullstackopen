const Notification = ({ message }) => {
  if (message === "" || message === null) {
    return null;
  }
  return <div className="success">{message}</div>;
};

export default Notification;
