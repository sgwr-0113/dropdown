import React, { useState, useCallback, useEffect } from 'react';
import  { DropdownList } from 'components/DropdownList';
import { ListItemType } from 'types/types';
import { Users, Arts } from 'mocks/data';
// import style from 'stylesheets/Index.module.scss';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// styled方式で既存のコンポーネントをカスタマイズできる
const MyPaper = styled(Paper)({
  width: 360,
  height: 360,
  margin: 16,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})

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
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& h1': {
        color: 'primary.main',
      },
      '& h2': {
        color: 'secondary.main',
      }
    }}
  >
      <MyPaper elevation={3}>
        <h1>コメント「{comment}」</h1>
        <h2>ユーザー一覧</h2>
        <DropdownList<string> listItems={users} setListItem={handleSetUserComment} />
      </MyPaper>
      <MyPaper elevation={3}>
        <h1>価格 {price}円</h1>
        <h2>作品一覧</h2>
        <DropdownList<number> listItems={arts} setListItem={handleSetArtPrice} />
      </MyPaper>
    </Box>
  );
};
