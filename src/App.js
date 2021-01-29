import { Route } from 'react-router-dom';
import H3Page from './pages/H3Page';
import './App.css';

function App() {
  return <Route component={H3Page} exact path={'/h3'} />;
}

export default App;
