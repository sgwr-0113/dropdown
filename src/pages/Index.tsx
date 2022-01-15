import React, { useState, useCallback, useEffect } from 'react';
import  { DropdownList } from 'components/DropdownList';
import { ArtType, UserType } from 'types/user';
import { Users, Arts } from 'mocks/data';

export const Index = () => {
  const users: UserType[] = Users;
  const arts: ArtType[] = Arts;
  const [comment, setComment] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  // useEffectは第二引数[]内の値が変わるたびに実行される
  useEffect(()=>{
    console.log(`コメント${comment}に変わったよ!`);
  }, [comment])

  const handleSetUserName = useCallback((value: string) => {
    setComment(value)
  }, []);
  const handleSetArtPrice = useCallback((value: number) => {
    setPrice(value)
  }, []);

  return (
    <div>
      <p>コメント「{comment}」</p>
      <span>ユーザー一覧</span>
      <DropdownList<string> listItems={users} setListItem={handleSetUserName} />
      <p>価格 {price}円</p>
      <span>作品一覧</span>
      <DropdownList<number> listItems={arts} setListItem={handleSetArtPrice} />
    </div>
  );
};
