import styles from "./ItemEdit.module.css";
import { useState } from "react";

export function ItemEdit({ id, task, editItem, onClose }) {
  const [editFormData, setEditFormData] = useState({
    task: task,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    editItem(id, editFormData);
    onClose(); // Сохраняем изменения и закрываем форму
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSave}>
          <div>
            <label htmlFor="task">Task</label>
            <input
              type="text"
              id="task"
              name="task"
              value={editFormData.task}
              onChange={handleChange}
              required
            />
          </div>
          <button className={styles.save} type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
