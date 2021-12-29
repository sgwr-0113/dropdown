import React from 'react';

interface Props {
  value: string;
  setValue: (name: string) => void;
}

export const DropdownItem = (props: Props) => {
  const {  value, setValue } = props;

  
  return (
    <div onClick={() => setValue(props.value)}>{value}</div>
  );
};