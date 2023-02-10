import styles from "./UserForm.module.css";
import FormField from "./FormField";

const UserForm = (props) => {
  const FORM_FIELDS = [
    { label: "Username", inputType: "text" },
    { label: "Age (years)", inputType: "text" },
  ];

  return (
    <form>
      <div className={styles['form-field']}>
        <label className={styles.label}>Username</label>
        <input className={styles['text-input']} type="text"></input>
      </div>
      <div className={styles['form-field']}>
        <label className={styles.label}>Age (years)</label>
        <input className={styles['text-input']} type="text"></input>
      </div>
    </form>
  );
};

export default UserForm;
