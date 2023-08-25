import * as Mongoose from 'mongoose';

interface IProfile {
    orignal?: string;
    thumb?: string;
}

export interface IRegister extends Mongoose.Document {
    name: string;
    email: string;
    password: string;
    avatar:{ 
        public_id:{
            type:string
        }
    };
    url:string;
    role:string;
    createdAt:string;
};
