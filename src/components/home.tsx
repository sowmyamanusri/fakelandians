import React from 'react';
import generateMisdemeanours from '../generate_misdemeanours';

const Home : React.FC<any> =()=>{
return(
<div className ="home__container">
    <h2 className="home__title">Welcome to the Home of the Fakelandia Justice Department</h2>
    <p>Here you can browser fro the list of the recent misdemeanours committed by our citizen, or you can confess 
        to your own misdemeanour.  </p>
</div>
)
}

export default Home;