import '../src/styles/App.css'
import { useState } from 'react'
import Header from './components/Header';
import Card from './components/Card';
import images from './components/images.js'

const shuffle = (arr) => {
  if (!Array.isArray(arr)) return [];
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export default function App() {
  const [score, setScore] = useState()


  return (
    <>
      <Header></Header>
    </>
  )
}
