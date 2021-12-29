import React from 'react';
import { DropdownItem } from './DropdownItem';
import { UserType } from '../types/user'

interface Props {
  users: UserType[];
  setUserName: (name: string) => void; //親コンポーネントで管理するStateをセットするAction
}

export const DropdownList = (props: Props) => {
  const { users, setUserName } = props;

  return (
    <div>
      {users.map((user, i) => {
        return (
          <DropdownItem
            key={i}
            value={user.name}
            setValue={setUserName}
          />
        );
      })}
    </div>
  );
};
