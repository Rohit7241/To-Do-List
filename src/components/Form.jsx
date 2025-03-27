import { useState } from "react";
import styles from "./FormStyles.module.css"
import { TodoFormfields } from "./TodoFormfields";
export function Form({onCreate}){
    const [hide,sethide]=useState("Show");
    function handleSubmit(event){
        event.preventDefault();
        if(event.target[0].value==="") return;
        onCreate({
            name:event.target[0].value,
            description:event.target[1]?.value?? "",
            deadline:event.target[2]?.value?? "",
            priority:event.target[3]?.value?? "none",
            completed:false
        })
       
       
    event.target.reset();
    }
    function handleshow(){
    if(hide==="Show"){
        sethide("Hide");
    }
    else sethide("Show");
}
    return (
   <section>
       <h3 className={styles.Title}>
           New-To-DO
           <button onClick={handleshow}>{hide} all fields</button>
       </h3>
       <form className={styles.Title} onSubmit={handleSubmit}>
       <TodoFormfields hide={hide} handleSubmit={handleSubmit} handleShow={handleshow}/>
       </form>
       <div>
       </div>
   </section> 
   )   
   }