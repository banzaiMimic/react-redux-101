import React, { useEffect, useState } from 'react'

const CoursesPage = () => {

  const [ course, setCourse ] = useState({ title: '' })

  const handleChange = evt => {
    setCourse( { title: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    console.log('submit!')
  }

  useEffect( () => {

  }, [])

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input 
        type='text' 
        onChange={(e) => handleChange(e)}
        value={course.title}
      />
      <input type='submit' value='Save' />
    </form>
  )
}

export default CoursesPage