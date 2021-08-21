const Content = ({ part, exercise }: { part: string; exercise: number }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

export default Content;
