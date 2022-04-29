import React,{useState,useReducer} from 'react';

const Confess : React.FC =() =>{

  const formReducer= (state:any, event:any) => {
    if(event.reset) {
     return {
       subject: '',
       reason: '',
       details:''
     }
   }
    return {
      ...state,
      [event.name]: event.value
    }
  }
  const handleSubmit = (event:any) => {
   event.preventDefault();
   setSubmitting(true);
   
if (formData.reason === 'I just want to talk'){
  console.log(formData.reason);
}

   setTimeout(()=>{
   
       setSubmitting(false);
       setFormData({reset:true});
     
     
   },3000)
  }
  
  const handleChange =(event:any)=>{
      setFormData({name:event.target.name,value:event.target.value});
  }
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {});
  
  
return(
<section >
<div className ="confess__text"> 
<p>It's very diffcult to catch the people committing misdemeanours so we appreciate it when citizen confess to us 
    directly.</p>
<p>However if you're just having a hard day and need to vent then you're are welcome to contact us here too.up to you!</p>
</div>
<div className ="confess__form__submit">



{submitting && formData.reason !== 'I just want to talk' &&
   <div>
        You are submitting the following:
    {Object.keys(formData).length === 0 && submitting ? (
  <div className="ui message success">Signed in successfully</div>
    )  :(
        <pre>{JSON.stringify(formData, undefined, 2)}</pre>
      )}
     </div>
}

</div>

     
<form className ="confess__form" onSubmit ={handleSubmit}>
        <fieldset  className="confess__form__fieldset"disabled ={submitting}>
        <h2>Confess Form</h2>
         <label> Subject :
            <input name="subject" onChange={handleChange} value ={formData.subject}/>
          </label>
         <label> Reason for contact :
           <select  className ="reason" name="reason" onChange={handleChange}>
               <option value="">Reason for confess</option>
               <option value="Mild Public Rudeness = 🤪">Mild Public Rudeness = 🤪</option>
               <option value="Speaking in a Lift = 🗣">Speaking in a Lift = 🗣</option>
               <option value="Not Eating Your Vegetables = 🥗">Not Eating Your Vegetables = 🥗</option>
               <option value="Supporting Manchester United = 😈">Supporting Manchester United = 😈</option>
               <option value="I just want to talk">I just want to talk</option>
           </select>
           </label>
          <textarea  className ="textarea" value= {formData.textarea} onChange={handleChange} />  
          <button className ="btn" type="submit" disabled ={submitting}>Submit</button>
         </fieldset>
</form>

</section>
)
}




export default Confess;