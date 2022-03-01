// import { useState } from 'react';
// import logo from '../../assets/logo.svg';
import { Counter, Todos } from 'components';
import './App.css';

export default function App() {
  return (
    <div>
      <Counter />
      <hr />
      <Todos />
    </div>
  );
}
