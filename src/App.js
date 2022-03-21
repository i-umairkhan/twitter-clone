import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget.js';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default App;
