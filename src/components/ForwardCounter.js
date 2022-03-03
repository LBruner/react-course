import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from "../hooks/UseCounter";

const ForwardCounter = () => {
  const counter = useCounter();
  return <Card>{counter.nums[0]}</Card>;
};

export default ForwardCounter;
