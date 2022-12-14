import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './components/About'
import Contacts from './components/Contacts'
import Home from './components/Home'
import MainLayout from './layouts/MainLayout'

import Courses from './components/Courses'
import SingleCourses from './components/SingleCourses'

import NotFound from './components/NotFound'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index={true} element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="courses/" element={<Courses />} />
            <Route path="courses/:slug" element={<SingleCourses />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
