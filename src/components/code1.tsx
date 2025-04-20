// Importing React for using JSX and functional components
import React from 'react';

// 1. Define the props type for the Greeting component
type GreetingProps = {
  name: string; // The 'name' prop must be a string
};

// 2. Define the functional component with type annotations
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>; // 3. Render a greeting with the provided name
};

export default Greeting;
