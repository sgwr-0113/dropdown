import React, { useState, useCallback, useEffect } from 'react';
import  { DropdownList } from '../components/DropdownList';
import { ArtType, UserType } from '../types/user';
import { Users, Arts } from '../mocks/data';

export const Index = () => {
  const users: UserType[] = Users;
  const arts: ArtType[] = Arts;
  const [comment, setComment] = useState<string>("コメント");
  const [price, setPrice] = useState<number>(0);

  // useEffectは第二引数[]内の値が変わるたびに実行される
  useEffect(()=>{
    console.log(`コメント${comment}に変わったよ!`);
  }, [comment])

  // useCallbackは値を保持するもの
  // 第二引数[]には再描画の条件（「これが変更になったら再描画する」というもの）を書く
  // 主に子コンポーネントにpropsで関数を渡す場合に使う
  const handleSetUserName = useCallback((value: string) => {
    setComment(value)
  }, []);
  const handleSetArtPrice = useCallback((value: number) => {
    setPrice(value)
  }, []);

  return (
    <div>
      <p>{comment}</p>
      <span>ユーザー一覧</span>
      <DropdownList<string> listItems={users} setListItem={handleSetUserName} />
      <p>{price}</p>
      <span>作品一覧</span>
      <DropdownList<number> listItems={arts} setListItem={handleSetArtPrice} />
    </div>
  );
};
