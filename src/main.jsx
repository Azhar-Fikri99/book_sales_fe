import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//App di depan adalah function nya app
// import App from './App.jsx'
// Home adalah ada function yang ada di dalam home.jsx
import Home from './Home.jsx'
// import Main from './Main.jsx'
// import Header from './Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Home />
    
  </StrictMode>,
)
