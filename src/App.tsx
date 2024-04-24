import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouting from "./routes";


function App() {
  return (
    <Router>
      <AppRouting />
    </Router>
  )
}

export default App
