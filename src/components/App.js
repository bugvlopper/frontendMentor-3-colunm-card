import '../App.css';
import Card from './Card';
import data from "../data/data.json"

function App() {
  return (
    <div>
      <div className='mainContainer'>
        <Card data={data[0]}/>
        <Card data={data[1]}/>
        <Card data={data[2]}/>
      </div>
      <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" without rel="noreferrer">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/bugvlopper" target="_blank" without rel="noreferrer">Bugvlopper</a>.
  </div>
    </div>
  );
}

export default App;
