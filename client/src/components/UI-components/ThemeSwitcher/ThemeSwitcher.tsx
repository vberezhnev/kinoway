import { useTheme } from "next-themes";

import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.toggleSwitch}>
      <label>
        <input
          type="checkbox"
          onChange={() => {
            theme == "light" ? setTheme("dark") : setTheme("light");
          }}
          checked={theme == "light" ? false : true}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
