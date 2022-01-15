import React from 'react';
import style from "../stylesheets/DropdownItem.module.scss"

interface Props<T> {
  name: string;
  value: T;
  setValue: (value: T) => void;
}

export const DropdownItem = <T,>(props: Props<T>) => {
  const { name, setValue } = props;

  
  return (
    <div className={style["dropdown-item"]} onClick={() => setValue(props.value)}>{name}</div>
  );
};
