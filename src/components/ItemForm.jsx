import { useState } from "react";
import styles from "./ItemForm.module.css";

export function ItemForm({ addItem }) {
  const [formData, setFormData] = useState({
    task: "",
  });

  const [formVisible, setFormVisible] = useState(false);

  const handleChange = (i) => {
    const { name, value } = i.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (i) => {
    i.preventDefault();
    addItem(formData);
    setFormData({ task: "" });
    setFormVisible(false);
  };
  const toggleFormVisibility = () => {
    setFormVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <button className={styles.addtask} onClick={toggleFormVisibility}>
        <i className="fa-solid fa-circle-plus"></i>
      </button>
      <div className={styles.taskform}>
        {formVisible && (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.input}>
              <label htmlFor="task">Task</label>
              <input
                type="text"
                id="task"
                name="task"
                value={formData.task}
                onChange={handleChange}
                required
              />
            </div>
            <button className={styles.submit} type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
