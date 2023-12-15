import { useState } from 'react';

export default function Square({ value }) {
  const [content, setContent] = useState(value);
  return <button className="square" 
  onClick={() => {
    setContent('X')
  }}>{content}</button>

}
