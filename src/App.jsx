import styles from './App.module.css'
import { Form } from './components/Form'
import { useState } from 'react'
import { List } from './components/List';
import { Todofilter } from './components/Todofilter';
function App() {
const [todos,settodos]=useState([])
const[filters,setfilters]=useState({})
 function handleCreate(todo){
   settodos((prev)=>[...prev,{id: prev.length+1,...todo}]);
 }
 function handleDelete(id){
 settodos((prev)=>prev.filter((given)=>{
 return given.id!=id;
 }))
 }
 function handleUpdate(id,item){
  settodos((prev)=>prev.map((todo)=>
  todo.id===id? item:todo ))
 }
 function afterfilter(todo){
   const {completed,priority}=filters;
   return (completed===""||todo.completed===completed) && (priority===""||todo.priority===priority);
 }
  return (
    <div className={styles.App}>
     <header className={styles.Header}>
      <img className={styles.Logo} src='/logo.webp'/>
      <h2 className={styles.Title}>To-Do APP</h2>
     </header>
     <div className={styles.AppContainer}>
      <Form onCreate={handleCreate}/>
      <Todofilter onFilter={setfilters}/>
      <List items={todos.filter(afterfilter)} onUpdate={handleUpdate} handledelete={handleDelete}/>
     </div>
    </div>
  )
}

export default App
