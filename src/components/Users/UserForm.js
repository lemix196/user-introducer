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

    if (enteredName.trim().length === 0) {
      props.showModal("Please enter a valid name and age (non-empty values).");
      return null;
    } else if (enteredAge < 1) {
      props.showModal("User age must be positive number bigger than 0.");
      return null;
    }

    const userData = {
      userName: enteredName,
      userAge: enteredAge,
    };

    props.onSaveUserData(userData);

    setEnteredName("");
    setEnteredAge("");
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
