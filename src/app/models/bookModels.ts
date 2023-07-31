export interface BookCard{
    _id?:string;
    title: string;
    subtitle: string;
    price: string;
    image: string;
    url: string;
}

export interface BookDetails extends BookCard{
    authors:string;
    publisher:string;
    pages:number;
    year:number;
    rating:number;
    desc:string;
}