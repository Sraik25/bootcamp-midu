import React from 'react';

const Message = ({ message }: { message: string }): JSX.Element => {
  return <h1>{message}</h1>;
};

export default Message;
