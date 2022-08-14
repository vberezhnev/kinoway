import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidenav}>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
};

export default Sidebar;
