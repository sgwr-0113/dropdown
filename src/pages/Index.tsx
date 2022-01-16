import React, { useState, useCallback, useEffect } from 'react';
import  { DropdownList } from 'components/DropdownList';
import { ListItemType } from 'types/types';
import { Users, Arts } from 'mocks/data';
import style from 'stylesheets/Index.module.scss';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

// styled方式で既存のコンポーネントをカスタマイズできる
const MyPaper = styled(Paper)({
  width: 360,
  height: 360,
  padding: 24,
  boxSizing: 'border-box',
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
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      '& h5': {
        color: 'primary.main',
        lineHeight: 3,
      },
      '& h6': {
        color: 'secondary.light',
        lineHeight: 2,
        fontWeight: 700,
      },
    }}
  >
      <MyPaper elevation={3} className={style["paper"]}>
        <ChatBubbleOutlineIcon className={style["icon"]} color="primary" fontSize="large" />
        <Typography variant="h5">{comment}</Typography>
        <Typography variant="h6">ユーザー一覧</Typography>
        <DropdownList<string> listItems={users} setListItem={handleSetUserComment} />
      </MyPaper>
      <MyPaper elevation={3} className={style["paper"]}>
        <PaidOutlinedIcon className={style["icon"]} color="primary" fontSize='large' />
        <Typography variant="h5">価格 {price}円</Typography>
        <Typography variant="h6">作品一覧</Typography>
        <DropdownList<number> listItems={arts} setListItem={handleSetArtPrice} />
      </MyPaper>
    </Box>
  );
};
