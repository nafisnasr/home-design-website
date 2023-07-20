import routes from './routes';
import { useRoutes } from 'react-router-dom';
import "./App.css"

function App() {
  const router = useRoutes(routes)
  return (
    <>
      {router}
    </>
  );
}

export default App;
