import './App.css';
import Description from './components/Description';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message message="Estamos trabajando" />
      <Message message="en el" />
      <Message message="bootcamp" />
      <Description />
    </div>
  );
}

export default App;
