import AppRouter from './pages/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCurrentWeatherCheck from './hooks/useCurrentWeatherCheck';

function App() {
  useCurrentWeatherCheck();

  return (
    <>
      <AppRouter />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}

export default App;
