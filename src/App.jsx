import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './MyRoutes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Title />
      <HeaderTabs />
      <MyRoutes />
    </div>
  )
}

const Title = () => {
  return (
    <header className="title">
      <h1>WantToBuy.com</h1>
    </header>
  );
};

function HeaderTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="header-tabs" >
      <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" component={Link} to="/Home" className="custom-tab"/>
          <Tab label="Buy" component={Link} to="/Buy" className="custom-tab1"/>
          <Tab label="Sell" component={Link} to="/Sell" className="custom-tab2"/>
          <Tab label="Profile" component={Link} to="/Profile" className="custom-tab3"/>
          <Tab label="Login" component={Link} to="/Login" className="custom-tab4"/>
      </Tabs>
    </div>
  );
}
export default App
