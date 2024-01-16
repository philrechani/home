
import './App.css';
import { Banner } from './Banner';
import { Socials } from './Socials';
import { PageBar } from './PageBar';
import { useEarthData } from './useEarthData'
import { Earth } from './Earth'
import { useWindowSize } from './useWindowSize';

function App() {
  const windowSize = useWindowSize()
  
  const width = 1400
  const height = 900
  console.log("window size:")
  console.log(windowSize)
  console.log(width,height)

  const data = useEarthData()

  return (
    <div className="App">
      <Banner />
      <Socials />
      <PageBar />
      {data ?
        <Earth data={data} /> : null}
    </div>
  );
}

export default App;
