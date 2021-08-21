import React from 'react';
import { DataType } from '../dtos/types';

const Content = ({ parts }: { parts: DataType[] }): JSX.Element => {
  return (
    <>
      {parts.map((part) => (
        <p>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  );
};

export default Content;
