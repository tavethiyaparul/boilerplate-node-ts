import * as Mongoose from "mongoose";
import { IRegister } from "./register.interface"

export const RegisterSchema: Mongoose.Schema<IRegister> = new Mongoose.Schema({
    name: { type: String, required: false, lowercase: true },
    email: { type: String, required: false, lowercase: true },
    password: { type: String, required: false },
    avatar: { type: String, required: false },
    url: { type: String, required: false },
    role: { type: String, required: false, default: "user" },
    createdAt: { type: Date, required: false, default: Date.now },
});


export const RegisterModel = Mongoose.model<IRegister>("register", RegisterSchema);
