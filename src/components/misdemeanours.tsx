import React from 'react';
 
import {Misdemeanour} from '../generate_misdemeanours';


interface MisdemeanoursTableProps{
  citizenId:number;
  date:string;
  misdemeanour:Misdemeanour
  
}

const MisdemeanoursTable:React.FC<MisdemeanoursTableProps> =({citizenId,date,misdemeanour}) => {
 
return(
 <div className =" misdemeanoursBody">
    <span className ="misdemeanoursId">{citizenId}</span>
    <span className ="misdemeanoursdate">{date}</span>
    <span className ="misdemeanourstype">{misdemeanour}</span>
    <span className ="misdemeanoursimg"><img alt={"punishment for " +misdemeanour} src={'https://picsum.photos/id/30/30/'} /></span>
   </div>
);
}


export default MisdemeanoursTable;