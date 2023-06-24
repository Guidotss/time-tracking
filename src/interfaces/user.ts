import { Activity } from "./activity";

export interface User { 
    id: string;
    name: string; 
    activity: Activity[];
}