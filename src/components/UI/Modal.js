import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <h2 className={styles.h2}>
          Invalid input{" "}
          <span className={styles.close} onClick={props.hideModal}>
            &times;
          </span>
        </h2>
        <p>{props.message}</p>
        <button className={styles["close-button"]} onClick={props.hideModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
