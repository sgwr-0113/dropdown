import React, { useState, useCallback } from 'react';
import  { DropdownList } from '../components/DropdownList';
import { UserType } from '../types/user';

interface Props {
  users: UserType[];
}

export const Index = (props: Props) => {
  const { users } = props;
  // DropDownで選択した単一のユーザーの名前をStateで管理
  const [userName, setUserName] = useState<string>("hoge");
  
  const handleSetUserName = useCallback((name: string) => {
    setUserName(name)
  }, []);

  return (
    <div>
      <p>{userName}</p>
      <span>ユーザー一覧</span>
      <DropdownList users={users} setUserName={handleSetUserName} />
    </div>
  );
};
