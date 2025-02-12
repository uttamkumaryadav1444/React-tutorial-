import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Alphanumeric from './Components/Alphanumeric.jsx'; // Import Alphanumeric
import ToDoList from './Components/To_Do_List.jsx';
import ColorPicker from './Components/Color_Picker.jsx';
import ThemeToggler from './Components/DayNight.jsx';
import Pagination from './Components/Pagination.jsx';
import ContentFinder from './Components/ContentFinder.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Alphanumeric />
    <ToDoList />
    <ColorPicker />
    <ThemeToggler />
    <Pagination/>
    <ContentFinder/>
  </StrictMode>,
  
)
