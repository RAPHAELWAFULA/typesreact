import React from 'react';
import Greeting from './components/code1';
import Counter from './components/code2';

const App: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <Greeting name="LEON KAI" />
      <Counter />
    </div>
  );
};

export default App;
