import styles from "./Item.module.css";

export function Item({ id, task, removeItem, startEditing }) {
  return (
    <div className={styles.item}>
      <p>{task}</p>
      <div className={styles.buttons}>
        <button onClick={startEditing}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => removeItem(id)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}
