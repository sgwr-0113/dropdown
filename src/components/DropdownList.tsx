import React from 'react';
import { DropdownItem } from 'components/DropdownItem';
import { ListItemType } from 'types/types';
import Stack from '@mui/material/Stack';


interface Props<T> {
  listItems: ListItemType<T>[];
  setListItem: (value: T) => void;
}

export const DropdownList = <T,>(props: Props<T>) => {
  const { listItems, setListItem } = props;

  return (
    // sxを用いると簡易表記が可能になる pはpadding
    <Stack spacing={2} sx={{p: '20px 0'}}>
      {listItems.map((listItem, i) => {
        return (
          <DropdownItem<T>
            key={i}
            name={listItem.name}
            value={listItem.value}
            setValue={setListItem}
          />
        );
      })}
    </Stack>
  );
};
