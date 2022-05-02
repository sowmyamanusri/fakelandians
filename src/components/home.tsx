import React ,{useContext}from 'react';
import MisdemeanoursList,{MisdemeanoursContext} from './misdemeanoursList';



const Home : React.FC<any> =()=>{
    const misdemeanours = useContext(MisdemeanoursContext);
    const misdemeanoursCount = misdemeanours.length;
   
return(
<div className ="home__container">
    <h2 className="home__title">Welcome to the Home of the Fakelandia Justice Department</h2>
    <p>Here you can browser fro the list of the recent misdemeanours committed by our citizen, or you can confess 
        to your own misdemeanour.  </p>
    
    <h2 className = "home__count">The Total Misdemeanours in the Fakelandia are :{misdemeanoursCount}</h2>
      
 
         
</div>
)
}

export default Home;