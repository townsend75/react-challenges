import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefullGreeting';
import NavBarSimple from './components/NavBarSimple';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
        
        <Content/>
    </div>
  );
}

export default App;