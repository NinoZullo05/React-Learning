import React from 'react';

const ChildComponent = React.memo(({ value }) => {
  console.log('Memoized ChildComponent rendered');
  return <p>Value: {value}</p>;
});

export default ChildComponent;
