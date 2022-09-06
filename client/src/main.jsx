import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Dashboard from './pages/supplier/Supplier.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(
  <Dashboard classes={{
    tableContainer: '',
    appBarSpacer: '',
    container: '',
    drawerPaper: '',
    title: '',
    toolbar: '',
    root: ''
  }} />,
  mountNode);

export default App;