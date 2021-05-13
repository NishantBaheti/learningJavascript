import { Header } from './Components/Header';
import { Todos } from './Components/Todos';
import { Footer } from './Components/Footer';
import { UseStateDemo } from './Components/UseStateDemo';
import { UseEffectDemo } from './Components/UseEffectDemo';
import { UseMemoDemo } from './Components/UseMemoDemo';
import { UseRefDemo } from './Components/UseRefDemo';
import { UseContextDemo } from './Components/UseContextDemo';


function App() {
  return (
    <div>
      <Header title="My Todos List" />
      <Todos />
      <hr />
      <UseStateDemo />
      <hr />
      <UseMemoDemo />
      <hr />
      <UseRefDemo />
      <hr />
      <UseContextDemo />
      <hr />
      <UseEffectDemo />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
