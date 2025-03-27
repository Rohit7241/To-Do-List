import { useEffect, useState } from "react"
import styles from "./Filters.module.css"
import { COMPLETED_FILTERS, PRIORITY_FILTERS} from "./filters"
export function Todofilter({onFilter}){
    const [completed,setcompleted]=useState("all")
    const [priority,setpriority]=useState("all")
    useEffect(()=>{
      const filters={
         completed: COMPLETED_FILTERS[completed].value,
         priority:PRIORITY_FILTERS[priority].value
      } ;
      onFilter(filters);
    },[completed,priority])
        return(
        <>
        <h3>Filters</h3>
        <div className={styles.Filter}>
            <label htmlFor="completed">Completed</label>
        <select  id="completed" defaultValue={completed} onChange={(event)=>{setcompleted(event.target.value)}}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
        </select>
        <label htmlFor="priority">Priority</label>
        <select  id="priority" defaultValue={priority} onChange={(event)=>{setpriority(event.target.value)}}>
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        </select>
        </div>
        </>
    )
}