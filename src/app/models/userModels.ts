import { BookDetails } from "./bookModels";

export interface User{
    name:string;
    email:string;
    cart?:[];
};


export interface UserRegister{
    name:string;
    email:string;
    password:string;
    confirmPass:string;
};

export interface UserSignIn{
    email:string;
    password:string;
};

export interface CartModel{
    product:BookDetails;
    quantity:number;
};