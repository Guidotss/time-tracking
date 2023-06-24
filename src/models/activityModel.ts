import mongoose, { Schema, Model } from 'mongoose'; 


export interface IActivity {
    title: string;
    hours: number;
}

const activitySchema = new Schema({
    title: { type: String, required: true },
    hours: { type: Number, required: true },
});


const activityModel: Model<IActivity> = mongoose.models.Activity || mongoose.model('Activity', activitySchema) 
export default activityModel;