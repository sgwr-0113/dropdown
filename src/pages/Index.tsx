import React, { useState, useCallback, useEffect } from 'react';
import  { DropdownList } from 'components/DropdownList';
import { ListItemType } from 'types/types';
import { Users, Arts } from 'mocks/data';
import style from 'stylesheets/Index.module.scss';

export const Index = () => {
  const users: ListItemType<string>[] = Users;
  const arts: ListItemType<number>[] = Arts;
  const [comment, setComment] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  // useEffectは第二引数[]内の値が変わるたびに実行される
  useEffect(()=>{
    console.log(`コメント${comment}に変わったよ!`);
  }, [comment])

  const handleSetUserComment = useCallback((value: string) => {
    setComment(value)
  }, []);
  const handleSetArtPrice = useCallback((value: number) => {
    setPrice(value)
  }, []);

  return (
    <div className={style["wrapper"]}>
      <div className={style["card"]}>
        <h1>コメント「{comment}」</h1>
        <h2>ユーザー一覧</h2>
        <DropdownList<string> listItems={users} setListItem={handleSetUserComment} />
      </div>
      <div className={style["card"]}>
        <h1>価格 {price}円</h1>
        <h2>作品一覧</h2>
        <DropdownList<number> listItems={arts} setListItem={handleSetArtPrice} />
      </div>
    </div>
  );
};
