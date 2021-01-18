import React, { Component, createRef } from 'react';
import ToDoItem from '../components/ToDoItem'
import FormToDo from '../components/FormToDo'
import {ToDoContainer, Title, Tasks, ErrorDiv} from './ToDoList.css'
import * as toDoItemApi from '../helpers/api'
class ToDoList extends Component {

    state = {
      tasks: [],
      task: '',
    }

    getData = async () => {   
      const data = await toDoItemApi.getAll()
      this.setState({ tasks: data });
    }

    componentDidMount() {
      this.getData()
    }
  
    refError = createRef()

    handleInput = (e) => {
      this.setState({ task: e.target.value });
    }

    addTask = async (e) => {
      e.preventDefault()

      if(this.state.task.length === 0) {
        console.log(this.refError.current)
        this.refError.current.textContent = '*** Input empty ***'
        return
      } else {
        this.refError.current.textContent = ''
      } 
     
      const task = await toDoItemApi.create({
        text: this.state.task,
        date: new Date().toLocaleString(),
        done: false,
      })
      console.log(task)
      this.setState({ 
        tasks: [...this.state.tasks, task],
        task: '',
      });
    }

    findById = (id, arr) => {
      const index = arr.findIndex(el => el.id === id)
      return {index, task: arr[index]}
    }
    
    deleteTask = async (id) => {
      const {tasks} = this.state
      await toDoItemApi.destroy(id)
      const {index} = this.findById(id, tasks)
      const newTask = tasks.filter((el, ind) => ind !== index)
      this.setState({ tasks: newTask });
    }  
    
    toggleDone = async (id) => {
      console.log('onToggleDone')
      const {tasks} = this.state
      const {index, task} = this.findById(id, tasks)
      const {date, text} = task
      const res = await toDoItemApi.update(id, {
        done: !task.done, text: text, date,
      })

      const newTask = tasks.map((task, ind) => {
        if(ind === index) {
          return {...task, done: !task.done}
        }
        return task
      })
      console.log(newTask)
      this.setState({ tasks: newTask });    
    }
  
    render() {

      return (
        <ToDoContainer>
          {/* <Title>{this.props.title}</Title>  */}
          <Title>ToDo List</Title> 
            <Tasks className='tasks'>
            {
                this.state.tasks.map(task => (
                    <ToDoItem 
                      key={task.id} 
                      id={task.id}
                      text={task.text} 
                      done={task.done}
                      date={task.date}
                      onGetData={this.getData}
                      onDeleteTask={this.deleteTask}
                      onToggleDone={this.toggleDone}
                    />
                ))
            }            
            </Tasks>

            <ErrorDiv 
              ref={this.refError} 
              style={{marginTop: '10px'}}
            ></ErrorDiv>

            <FormToDo 
              onHandleInput={this.handleInput}
              taskValue={this.state.task}
              onAddTask={this.addTask}
            />
     
        </ToDoContainer>
      )
    }
}

export default ToDoList