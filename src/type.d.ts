import React, {Dispatch} from 'react';

interface IBook {
  id?: number;
  title: string;
  isbn: string;
  description: string;
  price: number;
  currency: string;
  coverUrl: string;
  quantity: number;
  author: string;
  visible: boolean;
}

interface IBookState {
  isLoading: boolean;
  books: IBook[];
}

interface IBookActions {
  addBook: (arg: IBook) => void;
  editBook: (arg: IBook) => void;
}

interface IBookContext {
  bookState: IBookState;
  bookActions: IBookActions;
}

interface IBookAdminViewProps {
  selectedId: number | null | undefined;
  setSelectedId: Dispatch<React.SetStateAction<number | null | undefined>>;
  inEdit: boolean;
  setInEdit: Dispatch<React.SetStateAction<boolean>>;
}

type LayoutProps = {
  children: React.ReactNode;
};

interface IUser {
  email: string;
}

interface IUserState {
  user: IUser | null;
}

interface IUserActions {
  login: (username: string, password: string) => void;
  logout: (arg: React.MouseEvent) => void;
}

interface IUserContext {
  userState: IUserState;
  userActions: IUserActions;
}