import { create } from 'zustand';
import { User } from '@/interfaces';


interface UserStore {
    user: User;
    token: string;
    setUser: ( user: User ) => void;
}


