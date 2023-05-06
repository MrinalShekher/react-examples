import './App.css';
import TopNav from './components/TopNav';
import Body from './components/Body';
import { useState } from 'react';
function App() {
  let [current_panel,setCurrentPanel] = useState(0);

  let choosePanel=(value)=>{
    setCurrentPanel(value)
  }
  return (
    <div className="App">
      <TopNav 
        choosePanel={choosePanel}
      />
      <Body current_panel={current_panel}/>
    </div>
  );
}

export default App;
