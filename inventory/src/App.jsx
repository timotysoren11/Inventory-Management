
import { Routes, Route } from 'react-router-dom'

import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"
import Categories from "./pages/Categories"
import Suppliers from "./pages/Suppliers"
import Purchases from "./pages/Purchases"
import Sales from "./pages/Sales"
import DashboardLayout from './layouts/DashboardLayout'

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/category' element={<Categories />} />
        <Route path='/supplier' element={<Suppliers />} />
        <Route path='/purchase' element={<Purchases />} />
        <Route path='/sale' element={<Sales />} />
      </Route>
    </Routes>
  );
}

export default App;