import jwt from 'jsonwebtoken';




export const signDocument = ( id: string, name: string, lastName: string ) =>  {
    if(!process.env.JSON_SECRET) throw new Error ('JSON_SECRET not found in .env file');
    return jwt.sign({ id, name, lastName }, process.env.JSON_SECRET, { expiresIn: '1d' });
}