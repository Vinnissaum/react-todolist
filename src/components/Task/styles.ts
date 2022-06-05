import styled from "styled-components";

interface ContainerProps {
  done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
  `
  display: flex;
  font-size: 2rem;
  background-color: #0a0612;
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
  align-items: center;

  input{
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
  }

  label{
    color: #CCC;
    text-decoration: ${done ? 'line-through' : 'initial'};
  }
`
));