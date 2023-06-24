import { Activity } from "./activity";

export interface User { 
    id?: string;
    name: string; 
    password: string;
    token?: string;
    activity?: Activity[];
}