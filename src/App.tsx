import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

function App() {
  const course = 'Half Stack application development';
  const parts = [
    { part: 'Fundamentals of React', exercise: 10 },
    { part: 'Using props to pass data', exercise: 7 },
    { part: 'State of a component', exercise: 14 },
  ];

  const total = (): number => {
    let total = 0;
    parts.forEach((part) => (total += part['exercise']));
    return total;
  };

  return (
    <>
      <Header course={course} />
      {parts.map((part, index) => (
        <Content key={index} part={part.part} exercise={part.exercise} />
      ))}
      <Total total={total} />
    </>
  );
}

export default App;
