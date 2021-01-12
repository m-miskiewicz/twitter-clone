import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = 'Twitter Clone - React App'
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
