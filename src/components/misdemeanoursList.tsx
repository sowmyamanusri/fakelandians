import React from 'react';
import generateMisdemeanours ,{Misdemeanour}from '../generate_misdemeanours';
import MisdemeanoursTable from './misdemeanours';
import {useState,useEffect} from 'react';
import {FakelandianMisdemeanours} from '../fakelandianMisdemeanours';


export const MisdemeanoursContext = React.createContext<Array<FakelandianMisdemeanours>>([]);
const MisdemeanoursList=() => {
  useEffect(()=>{
        const misdemeanursdata =async() =>{
            const  fetchedData = await(generateMisdemeanours(5));
            setMisdemeanours(fetchedData)
        }
        misdemeanursdata();
    },[]);
 
    const [misdemeanours , setMisdemeanours] = useState<Array<FakelandianMisdemeanours>>([]);
    const[misdemeanoursSelect,setMisdemeanoursSelect] = useState<Misdemeanour>();
    
    function handleOptions(e: any){
      setMisdemeanoursSelect(e.target.value);
    }

    return(
      <MisdemeanoursContext.Provider value ={misdemeanours}>
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
        {misdemeanoursSelect && misdemeanours.filter(m =>m.misdemeanour === misdemeanoursSelect)
          .map(item =>{return <MisdemeanoursTable  citizenId={item.citizenId} date={item.date}
            misdemeanour ={item.misdemeanour}/>
           })}

        {!misdemeanoursSelect &&
      misdemeanours.map(item =>{return <MisdemeanoursTable  citizenId={item.citizenId} date={item.date}
           misdemeanour ={item.misdemeanour}/>
          })
          }
     </section>
        </MisdemeanoursContext.Provider>

    )
}


export default MisdemeanoursList;