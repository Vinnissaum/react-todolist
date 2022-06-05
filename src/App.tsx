import { useState } from 'react';
import { Container, Area, Header } from './App.styles';
import { TaskType } from './types/task';
import { Task } from './components/Task';
import { AddArea } from './components/AddArea';
import { ListChecks } from 'phosphor-react';

function App() {
  const [list, setList] = useState<TaskType[]>([
    {id: 1, name: 'Finish this exercise', done: true}, 
    {id: 2, name: 'Go to the next exercise', done: false}, 
    {id: 3, name: 'Take a nap', done: false},
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  }

  const handleCheckUpdate = (id: number, isChecked: boolean) => {
    let newList = [...list];
    newList[id - 1].done = isChecked;
    setList(newList);
  }

  return (
    <Container>
      <Area>
        <Header>
          <ListChecks size={40} weight='bold'/>
          To-Do  List
        </Header>

        <AddArea onEnterPress={handleAddTask}/>
        
        {list.map((item, index) => (
          <Task key={index} task={item} checkStatusUpdate={handleCheckUpdate}/>
        ))}
      </Area>
    </Container>
  )
}

export default App
