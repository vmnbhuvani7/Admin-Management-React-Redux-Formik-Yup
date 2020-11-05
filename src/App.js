import './App.css';
import MainRouter from './MainRouter';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <MainRouter />
      <ToastContainer />
    </>
  );
}

export default App;
