import { TaskType } from '../../types/task';
import { Container } from './styles';

interface Props {
  task: TaskType;
  checkStatusUpdate: (id: number, isChecked: boolean) => void;
}

export const Task = ({task, checkStatusUpdate}: Props) => {

  return(
    <Container done={task.done}>
      <input 
      type='checkbox' 
      id={task.id.toString()} 
      checked={task.done} 
      onChange={(e) => checkStatusUpdate(task.id, e.target.checked)}
      />
      <label>{task.name}</label>
    </Container>
  );
}