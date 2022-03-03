import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from "../hooks/UseCounter";

const ForwardCounter = () => {
  const counter = useCounter(true);
  console.log(counter)
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
