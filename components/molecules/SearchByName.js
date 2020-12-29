import { useState } from 'react';
import Button from '../atoms/Button';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const SearchByName = ({ dispatch }) => {
  const [input, setInput] = useState('');

  const handleFormSending = () => {
    dispatch({ type: 'by name', value: input });
    setInput('');
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Label title='By Name:' htmlFor='name' />
      <Input
        type='text'
        placeholder='Search...'
        id='name'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <Button text={'Find My Starship'} handler={handleFormSending} />
      <style jsx>{`
        input:focus,
        button:focus {
          outline: none;
        }

        input {
          padding: 3px;
          margin: 10px 0;
        }
      `}</style>
    </form>
  );
};

export default SearchByName;
