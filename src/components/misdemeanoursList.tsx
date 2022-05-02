import React from 'react';
import generateMisdemeanours ,{Misdemeanour}from '../generate_misdemeanours';
import MisdemeanoursTable from './misdemeanours';
import {useState,useEffect} from 'react';
import {FakelandianMisdemeanours} from '../fakelandianMisdemeanours';
import LoadingIndicator from './loadIndicator';



export const MisdemeanoursContext = React.createContext<Array<FakelandianMisdemeanours>>([]);
const MisdemeanoursList=() => {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
        const misdemeanursdata =async() =>{
          if(loading)return;
          setLoading(true);
         const  fetchedData = await(generateMisdemeanours(10));
        setMisdemeanours(fetchedData);
        if(!loading){
          setLoading(false);  
        }
      }
        misdemeanursdata();
    },[])
 
    const [misdemeanours , setMisdemeanours] = useState<Array<FakelandianMisdemeanours>>([]);
    const[misdemeanoursSelect,setMisdemeanoursSelect] = useState<Misdemeanour>();
     const  misdemeanoursCount = misdemeanours.length;
     console.log(misdemeanoursCount);
    
    function handleOptions(e: any){
      setMisdemeanoursSelect(e.target.value);
    }

    return(
      <MisdemeanoursContext.Provider value ={misdemeanours}>
         <h2 className = "home__count">The Total Misdemeanours in the Fakelandia are :{misdemeanoursCount}</h2>
        <section className="misdemeanoursFilter">
          <select  id="options" className="options" placeholder="Filter"
           name="options" onChange={handleOptions}> 
            <option value="">All Misdemeanours</option>
             <option value="Mild Public Rudeness = 🤪">Mild Public Rudeness = 🤪</option>
            <option value="Speaking in a Lift = 🗣">Speaking in a Lift = 🗣 </option>
            <option value="Not Eating Your Vegetables = 🥗">Not Eating Your Vegetables = 🥗</option>
-           <option value="Supporting Manchester United = 😈">Supporting Manchester United = 😈</option>
          </select>
        </section>
      <section className ="misdemeanoursTable">
        <div className="misdemeanoursHeader">
            <span className="misdemeanoursId">CitizenId</span>
            <span className="misdemeanoursdate">Date</span>
            <span className="misdemeanourstype">Misdemeanours</span>
            <span className="misdemeanoursImg">Punishment</span>
        </div>
        {loading && <LoadingIndicator />}
        {!loading && misdemeanoursSelect && misdemeanours.filter(m =>m.misdemeanour === misdemeanoursSelect)
          .map(item =>{return <MisdemeanoursTable  citizenId={item.citizenId} date={item.date}
            misdemeanour ={item.misdemeanour}/>
           })}

      {!loading && !misdemeanoursSelect &&
      misdemeanours.map(item =>{return <MisdemeanoursTable  citizenId={item.citizenId} date={item.date}
           misdemeanour ={item.misdemeanour}/>
          })
          }
     </section>
        </MisdemeanoursContext.Provider>

    )
}


export default MisdemeanoursList;