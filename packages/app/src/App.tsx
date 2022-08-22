/* eslint-disable */
import { BrowserRouter } from 'react-router-dom';
import Routers from './pages/routers';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
