import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dashboard, LoginPage, PageNotFound} from './pages';

function App() {
 
  return (
    <>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;

 
 