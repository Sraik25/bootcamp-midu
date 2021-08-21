import { DataType } from '../dtos/types';

const Total = ({ parts }: { parts: DataType[] }): JSX.Element => {
  const total = (): number => {
    let total = 0;
    parts.forEach((part) => (total += part['exercises']));
    return total;
  };

  return <p>Total number exercises {total()}</p>;
};

export default Total;
