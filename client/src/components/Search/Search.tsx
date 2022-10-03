import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

import { FiX, FiSearch, FiChevronLeft } from "react-icons/fi";
import { RoutesEnum } from "@/constants/routes";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useActions";
import { useDebounce } from "@/hooks/useDebounce";

import { SearchList } from "./components/SearchList/SearchList";
import { ButtonBase } from "@/components/UI-components/ButtonBase/ButtonBase";

import styles from "./Search.module.scss";

export const Search = () => {
  const { visible } = useTypedSelector((state) => state.searchReducer);
  const { setSearch, setVisible } = useActions();
  const [value, setValue] = useState<string>("");
  const { debouncedValue, setDebouncedValue } = useDebounce(value.trim(), 300);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitForm = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    setSearch(value);
    router.push(`/search/${value}`);
  };

  useEffect(() => {
    setVisible(false);
    setValue("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const handleClearInput = () => {
    setValue("");
    setVisible(false);
    setDebouncedValue("");
  };

  //useOnClickOutside(formRef, () => setVisible(false));

  const isActive = debouncedValue && visible;

  const openSearch = () => {
    setVisible(false);
    //inputRef.current?.focus();
  };

  return (
    <div className={styles.searchContainer}>
      <form
        onSubmit={submitForm}
        ref={formRef}
        action="#"
        className={`${styles.form} ${visible} ${styles.visible}`}
      >
        <a className={styles.search}>
          <input
            data-testid="input"
            type="search"
            ref={inputRef}
            className={`${styles.dark} ${styles.input}`}
            value={value}
            onChange={handleChange}
            onClick={() => setVisible(true)}
          />
        </a>
        <ButtonBase
          ripple
          type="button"
          className={styles.hideSearch}
          onClick={() => setVisible(false)}
        >
          <FiChevronLeft />
        </ButtonBase>
        <ButtonBase
          ripple
          type="button"
          className={`${styles.closeBtn} ${value && styles.active}`}
          onClick={handleClearInput}
        >
          <FiX />
        </ButtonBase>
        <ButtonBase
          ripple
          className={styles.searchBtn}
          disabled={!value.length}
          onClick={submitForm}
        >
          <FiSearch />
        </ButtonBase>
        {isActive && <SearchList value={debouncedValue} />}{" "}
      </form>
      <ButtonBase onClick={openSearch} className={styles.openSearch}>
        <FiSearch />{" "}
      </ButtonBase>
    </div>
  );
};
