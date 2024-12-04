import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import CourseList from './components/courses/CourseList'
import Course from './components/courses/Course'
import NewCourse from './components/courses/NewCourse'
import CourseLayout from './components/courses/CourseLayout'

function AppRouter() {
  return (
    <Routes>
        <Route path='/'  element={
            <Home />
        } />
        <Route path='/contact'  element={
            <Contact />
        } />
        <Route path='/about'  element={
            <About />
        } />

        <Route path="/courses" element={
            <CourseLayout />
        }>

            <Route index  element={
                <CourseList />
            } />
            <Route path=':courseId'  element={
                <Course/>
            } />
            <Route path='new'  element={
                <NewCourse />
            } />
            
        </Route>

        {/* <Route path='/courses'  element={
            <CourseList />
        } />
        <Route path='/courses/:courseId'  element={
            <Course/>
        } />
        <Route path='/courses/new'  element={
            <NewCourse />
        } /> */}

    </Routes>
  )
}

export default AppRouter