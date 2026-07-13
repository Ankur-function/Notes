import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideBar from './components/Siderbar';

function App() {
  return (
    <div className="App">
      <Header/>
    <div className="main-content-layout"> {/* Added wrapper around side bar and main feed */}
        <SideBar/>
        <Outlet/>
  </div>
    </div>
  );
}

export default App;
