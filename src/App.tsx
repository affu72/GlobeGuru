import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Product,Pricing,HomePage} from './pages/index';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='pricing' element={<Pricing/>}/>
      </Routes>
    </BrowserRouter>
  )
}
