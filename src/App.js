import './App.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router/Router';

function App() {
  return (
    <div data-theme="dark" className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
