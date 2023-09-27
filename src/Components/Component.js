import React, { useEffect } from 'react';

const Component = ({ num }) => {
  //   console.log(num);
  // Mounting
  //   useEffect(() => {
  //     console.log('component did mount');
  //   });
  useEffect(() => {
    // Update
    console.log('component updating');
    // Unmounting
    return () => {
      console.log('Component Removed');
    };
  }, [num]);
  return <div>{num}</div>;
};

export default Component;
