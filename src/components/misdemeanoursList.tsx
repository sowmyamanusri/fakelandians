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
    const[misdemeanoursSelect,setMisdemeanoursSelect] = useState<Array<Misdemeanour>>([]);
    function handleOptions(e: any){
      setMisdemeanoursSelect(e.target.value);
    }

    return(
      <MisdemeanoursContext.Provider value ={misdemeanours}>
        <section className="misdemeanoursFilter">
          <select  id="options" className="options" placeholder="Filter"
           name="options" onSelect={handleOptions}> 
            <option value="rudeness">Mild Public Rudeness</option>
            <option value="speaking">Speaking in a Lift </option>
            <option value="eating">Not Eating Your Vegetables</option>
-           <option value="supporting">Supporting Manchester United</option>
          </select>
        </section>
      <section className ="misdemeanoursTable">
        <div className="misdemeanoursHeader">
            <span className="misdemeanoursId">CitizenId</span>
            <span className="misdemeanoursdate">Date</span>
            <span className="misdemeanourstype">Misdemeanours</span>
            <span className="misdemeanoursImg">Punishment</span>
        </div>

      {misdemeanours.map(item =>{return <MisdemeanoursTable  citizenId={item.citizenId} date={item.date}
           misdemeanour ={item.misdemeanour}/>
          })}
        
        </section>
        </MisdemeanoursContext.Provider>

    )
}


export default MisdemeanoursList;