import "./CSS/TodoItems.css";
import remove from "./Assets/remove.svg";

const TodoItems = ({ no, display, text }) => {
  const toggle = () => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data) {
      }
    }
  };

  return (
    <div className="todoitems">
      <div
        className="todoitems-container"
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={remove} alt="" />
        ) : (
          <img src={remove} alt="" />
        )}

        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitems-cross-icon" src={remove} alt="" />
    </div>
  );
};

export default TodoItems;
