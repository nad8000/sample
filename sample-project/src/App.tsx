import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Counter from './components/AppComponet';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter 
        count={0}
        onIncrement={() => console.log('Increment')}
        onDecrement={() => console.log('Decrement')}/>
    </Provider>
  );
};

export default App;