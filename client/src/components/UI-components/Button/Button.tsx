import styles from "./Button.module.scss";

type Data = {
  text: String;
  children: React.ReactNode;
};

const Button = (props: any) => {
  return <button className={styles.ButtonBase_btn}>{props.text}</button>;
};

export default Button;
