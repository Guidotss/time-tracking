import jwt from 'jsonwebtoken';



export const signDocument = ( id: string, name: string ) =>  {
    if(!process.env.JSON_SECRET) throw new Error ('JSON_SECRET not found in .env file');
    return jwt.sign({ id, name }, process.env.JSON_SECRET, { expiresIn: '1d' });
}