import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Products,
  Pricing,
  HomePage,
  PageNotFound,
  MaterialUI,
  AppLayout,
} from "./pages/index";

import './App.css'
import Login from './pages/Login';

export default function App() {
  return (
    <>
      {/* <h1>Hello Router!</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="products" element={<Products />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />} />
          {/* <Route path="mui" element={<MaterialUI />} /> */}
          <Route path='login' element={<Login/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
