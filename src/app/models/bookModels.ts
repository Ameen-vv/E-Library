export interface BookCard{
    _id?:string;
    title: string;
    subtitle: string;
    price: number;
    image: string;
}

export interface BookDetails extends BookCard{
    authors:string;
    publisher:string;
    pages:number;
    year:number;
    rating:number;
    desc:string;
}