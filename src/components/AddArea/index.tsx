import { Container } from './styles';
import { PlusCircle } from 'phosphor-react';
import { useState, KeyboardEvent } from 'react';

interface Props {
  onEnterPress: (taskName: string) => void;
}

export const AddArea = ( {onEnterPress}: Props) => {
  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnterPress(inputText);
      setInputText('');
    }
  }

  return (
    <Container>
      <PlusCircle 
      className='plus-circle' 
      size={32} 
      alt='plus circle to add a new task'
      />
      <input 
      type="text" 
      placeholder='Add a new task'
      value={inputText}
      onChange={e => setInputText(e.target.value)}
      onKeyUp={handleKeyUp}
      />
    </Container>
  );
}