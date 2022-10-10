import logo from './logo.svg';
import './App.css';
import { Button } from 'react-daisyui'
import Header from './component/Header/Header';
import BodyHeader from './component/BodyHeaer/BodyHeader';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BodyHeader></BodyHeader>


    </div>
  );
}

export default App;
