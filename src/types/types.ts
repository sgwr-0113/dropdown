// export type UserType = {
//   name: string;
//   value: string;
// };

// export type ArtType = {
//   name: string;
//   value: number;
// };

// 類似した型をジェネリクスで共通化
export type ListItemType<T> = {
  name: string;
  value: T;
};
