import { Header } from './Components/Header';
import { Todos } from './Components/Todos';
import { Footer } from './Components/Footer';
import { UseStateDemo } from './Components/UseStateDemo';
import { UseEffectDemo } from './Components/UseEffectDemo';
function App() {
  return (
    <div>
      <Header title="My Todos List"/>
      <Todos />
      <UseStateDemo />
      <UseEffectDemo />
      <Footer />
    </div>
  );
}

export default App;
