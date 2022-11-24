import Bubble from './bubbles/Bubble';
import randomBubbleGenerator from './bubbles/randLocGen';

function App() {
  return (
    <div className="main">
      {randomBubbleGenerator(106)}
    </div>
  );
}

export default App;
