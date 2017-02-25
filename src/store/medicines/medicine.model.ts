export interface IMedicine {
  id?: string;
  url?: string;
  qty? : number;
  name: string;  
  cost: number;
  mongoId? : string;
  selected? : string;
}