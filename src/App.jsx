import { useState } from 'react'
import templatePhoto from './assets/download.jpg'
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
      <HeaderTabs />
      <MyRoutes />
      <Image top="100px" left="0px" photo={templatePhoto} price="$50" location="Milwaukee, WI"/>
      <Image top="400px" left="0px" photo={templatePhoto} price="$50" location="Phoenix, AZ"/>
      <Image top="100px" left="550px" photo={templatePhoto} price="$50" location="Phoenix, AZ"/>
    </div>
  )
}

function Image({top, left, photo, price, location}){
  const containerStyle = {
    position: "absolute", 
    top: top,
    left: left,
    width: "400px",
    textAlign: "center", 
  };

  return (
    <figure style={containerStyle}>
      <img src={photo} alt="Photo" style={{ width: "100%" }} />
      <figcaption>
        <div>{price}</div>
        <div>{location}</div>
      </figcaption>
    </figure>
  );
}

function HeaderTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="header-tabs" >
      <Tabs value={value} onChange={handleChange}>
          <Tab label="Buy" component={Link} to="/Buy" className="custom-tab1"/>
          <Tab label="Sell" component={Link} to="/Sell" className="custom-tab2"/>
          <Tab label="Profile" component={Link} to="/Profile" className="custom-tab3"/>
      </Tabs>
    </div>
  );
}
export default App
