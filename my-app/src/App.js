import { Header } from './Components/Header';
import { Todos } from './Components/Todos';
import { Footer } from './Components/Footer';
import { UseStateDemo } from './Components/UseStateDemo';
import { UseEffectDemo } from './Components/UseEffectDemo';
import { UseMemoDemo } from './Components/UseMemoDemo';
import { UseRefDemo } from './Components/UseRefDemo';
import { ThemeProvider } from './Components/ThemeContext';
import { UseContextDemo } from './Components/UseContextDemo';
import { UseReducerDemo } from './Components/UseReducerDemo';


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
      <ThemeProvider>
        <UseContextDemo />
      </ThemeProvider>
      <hr />
      <UseReducerDemo />
      <hr/>
      <UseEffectDemo />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
