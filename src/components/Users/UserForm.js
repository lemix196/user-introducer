import React, { useState } from "react";

import styles from "./UserForm.module.css";
// import FormField from "./FormField";

const UserForm = (props) => {
  //   const FORM_FIELDS = [
  //     { label: "Username", inputType: "text" },
  //     { label: "Age (years)", inputType: "text" },
  //   ];
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    console.log(enteredAge);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className={styles["form-field"]}>
        <label className={styles.label}>Username</label>
        <input
          className={styles["text-input"]}
          value={enteredName}
          onChange={nameChangeHandler}
          type="text"
        ></input>
      </div>
      <div className={styles["form-field"]}>
        <label className={styles.label}>Age (years)</label>
        <input
          className={styles["text-input"]}
          value={enteredAge}
          onChange={ageChangeHandler}
          type="text"
        ></input>
      </div>
      <button type="submit" className={styles.button}>
        Add User
      </button>
    </form>
  );
};

export default UserForm;
