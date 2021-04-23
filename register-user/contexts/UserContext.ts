import {createContext} from 'react';

type User = {
    name: string;
    birthDay: string;
    cpf: string;
    profession: string;
};

type UserContextData = {
    user: User;
    handleChange: (e) => void;
    handleSubmit: (e) => void;
}

export const UserContext = createContext({} as UserContextData);
