import logo from './logo.svg';
import './App.css';
import { Banner } from './Banner';
import { Socials } from './Socials';
import { PageBar } from './PageBar';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Socials/>
      <PageBar/>
    </div>
  );
}

export default App;
