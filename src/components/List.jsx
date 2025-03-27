import styles from "./List.module.css"
import { Listitem } from "./Listitem";
export function List({items,onUpdate,handledelete}){
     return(
        <>
        <br />
        <h2>To Do List</h2>
        {items.length==0&&<p>You Don't have any To-Dos</p>}
        <ul className={styles.TodoList}>
            {items.map((item)=>
                <Listitem key={item.id}item={item} onUpdate={onUpdate} handledelete={handledelete}/>
            )}
            </ul>
        </>
    );
}