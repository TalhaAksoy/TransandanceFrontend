export interface AuthModel{
    token : string,
    user :{        
        avatar : string,
        email : string,
        full_name : string,
        intra_id : number,
        is_ingame : boolean,
        is_online : boolean,
        login : string,
        twoFA : boolean
    }
};