import { useState } from "react";
import styles from "./List.module.css"
import { PRIORITIES,PRIORITY_DEFAULT } from "./priority";
import { TodoFormfields } from "./TodoFormfields";
export function Listitem({item,onUpdate,handledelete}){
    const [isediting,setediting]=useState(false);
    function handleinput(event){
        onUpdate(item.id,{...item,completed:event.target.checked})
    }
    function handleEdit(event){
        event.preventDefault();
        if(event.target[0].value==="") return;
        onUpdate(item.id,{...item,
            name:event.target[0].value,
            description:event.target[1]?.value?? "",
            deadline:event.target[2]?.value?? "",
            priority:event.target[3]?.value?? "none",
            completed:false
        })
        setediting(false);
   
    }
    
    const viewingTemplate=(
        <div className={styles.Content}>
        <input type="checkbox" name="completed" onChange={handleinput} checked={item.completed} className={styles.Status} />
        <div  className={styles.Info}>
            {item.name}
            {item.description && <span className={styles.Description}>{item.description}</span>}
            <div className={styles.AdditionalInfo}> 
            {item.deadline}{" "}
            {item.priority!=="none"&&
             (<span style={{color:PRIORITIES[item.priority].color}}>
               {PRIORITIES[item.priority].label}
             </span>)
            }
            </div>
        </div>
        <div className={styles.control}>
        <button  title="Edit" onClick={()=>setediting(true)}>
        <i  className="fa">&#xf040;</i>
        </button>
        <button title="Delete" onClick={()=>handledelete(item.id)}>🗑️</button>
        </div>
        </div>);
        const editingTemplate=(
       <form onSubmit={handleEdit}>
        <TodoFormfields todo={item} hide="Hide"/>
        <div>
            <input type="submit"  value="💾"/>
            <input className={styles.reset} onClick={()=>{setediting(false);}} type="reset" value="❌"/>
        </div>
       </form>
        )
    return(
        <li key={item.id}  className={item.completed?styles.TodoListItem:""} >
        {isediting? editingTemplate:viewingTemplate}
        </li>
    )
}