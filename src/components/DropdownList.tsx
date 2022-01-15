import React from 'react';
import { DropdownItem } from 'components/DropdownItem';
import { ListItemType } from 'types/types';

interface Props<T> {
  listItems: ListItemType<T>[];
  setListItem: (value: T) => void;
}

export const DropdownList = <T,>(props: Props<T>) => {
  const { listItems, setListItem } = props;

  return (
    <div>
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
    </div>
  );
};
