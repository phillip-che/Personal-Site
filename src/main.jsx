import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from './routes/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index={true} element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
)