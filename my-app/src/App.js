import './App.css';
import { Header } from './Components/Header';
import { Todos } from './Components/Todos';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div>
      <Header title="My Todos List"/>
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
