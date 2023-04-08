import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { increment, decrement } from '../actions/AppActions';
import Counter from '../components/AppComponet';

const CounterContainer: React.FC = () => {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <Counter
      count={count}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  );
};

export default CounterContainer;
