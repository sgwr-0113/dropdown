import React from 'react';

interface Props<T> {
  name: string;
  value: T;
  setValue: (value: T) => void;
}

export const DropdownItem = <T,>(props: Props<T>) => {
  const { name, setValue } = props;

  
  return (
    <div onClick={() => setValue(props.value)}>{name}</div>
  );
};