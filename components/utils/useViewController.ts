import { useState } from 'https://esm.sh/react';

const increment = (count: number, setCount: (Number: number) => void) => {
  if (count >= 2) {
    setCount(0);
  } else {
    setCount(count + 1);
  }
};

const decrement = (count: number, setCount: (Number: number) => void) => {
  if (count <= 0) {
    setCount(2);
  } else {
    setCount(count - 1);
  }
};

const useViewController = () => {
  const [count, setCount] = useState(0);

  const countLogic = (action: string | number) => {
    if (action === 'increment') increment(count, setCount);
    else if (action === 'decrement') decrement(count, setCount);
    else if (action === 1) setCount(1);
    else if (action === 2) setCount(2);
  };

  return [count, countLogic] as const;
};

export default useViewController;