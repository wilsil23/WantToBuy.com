import { useState } from 'react'
import templatePhoto from './assets/download.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <Image />
      <TopBar />
    </div>
  )
}

function Image(){
  return (
    <div>
      <img src={templatePhoto} className="photo_template" alt="Photo Template" />
    </div>
  )
}
function TopBar() {
  return (
    <div >
      <h1 className="bar_top">My Top Bar</h1>
    </div>
  );
}

export default App
