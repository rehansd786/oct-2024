import React from 'react'
import { Link, Outlet } from 'react-router'

function CourseLayout() {
  return (
    <div>

        <h1>
            Course Route Layout
        </h1>
        <Link to={'/courses'}>Course List</Link>
        <Link to={'/courses/1'}>Course 1</Link>
        <Link to={'/courses/2'}>Course 2</Link>
        <Link to={'/courses/new'}>New Course</Link>

        <Outlet />
    </div>
  )
}

export default CourseLayout