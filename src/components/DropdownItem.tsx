import React from 'react';
// import style from "stylesheets/DropdownItem.module.scss";
import Button from '@mui/material/Button';

interface Props<T> {
  name: string;
  value: T;
  setValue: (value: T) => void;
}

export const DropdownItem = <T,>(props: Props<T>) => {
  const { name, setValue } = props;

  
  return (
    <Button variant="outlined" size="medium" sx={{width: 160}}onClick={() => setValue(props.value)}>{name}</Button>
  );
};
