import styles from "./FormStyles.module.css"
export function TodoFormfields({hide,handleSubmit,handleShow,todo={}}){
    return(
        <div className={styles.FormFields}>
        <div className={styles.FormFields}>
        <input type="text" aria-label="Name*"
        placeholder="Name*"
        name="name"
        autoComplete="off"
        defaultValue={todo.name}/>
        </div>
        {hide==="Hide"&&<>
         <div className={styles.FormField}>
        <textarea name="description" rows="3" placeholder="Description" aria-label="description" defaultValue={todo.description}></textarea>
        </div>
   <div className={styles.FormGroup}>
   <div className={styles.FormField}>
   <label htmlFor="deadline">DeadLine</label>
   <input type="date" id="deadline" name="deadline" defaultValue={todo.deadline}/>
   </div>
    <div className={styles.FormField}>
    <label htmlFor="priority">Priority</label>
     <select name="priority" defaultValue={todo.priority} id="priority">
      <option value="none">None</option>
       <option value="Low">Low</option>
       <option value="Medium">Medium</option>
       <option value="High">High</option>
       </select>
    </div>
       </div>
       </> }   
       <input type="submit" />
        </div>
    )
}