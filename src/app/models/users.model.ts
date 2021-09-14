
export interface Users{
    id:number;
    name:string;
    username:string;
    address:{
        street:string,
        suite:string,
        city:string,
        zipcode:string,
        geo:{
            lat:string,
            lng:string,
        }
    };
    phone:number,
    website:string,
    company:{
        name:string,
        catchPhrase:string,
        bs:string,
    }
}