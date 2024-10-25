export interface LiveScore {
    _id:string
    match: string;
    venue: string;
    team1: string;
    score1: number;
    team2: string;
    score2: number;
    toss: string;
    result: string
}

export interface matches {
  _id:string
  flag1: string;    
  team1: string;   
  flag2: string;    
  team2: string;   
  stadium: string;  
  place: string;    
  date: string;    
  time: string;     
}

export interface login{
  email:string;
  password:string
}

export interface Player{
  _id:string
  imgURL: string;    
  typeURL: string;   
  playertype: string;    
  age: string;   
  style: string; 
  name:string  

}
