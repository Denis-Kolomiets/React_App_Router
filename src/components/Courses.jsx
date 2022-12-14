import courses from '../data/courses'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useState, useEffect } from 'react'

const SORT_KEY = ['title', 'slug', 'id']

function sortCourses(courses, key) {
  const sortedCourses = [...courses]
  if (!key) {
    return sortedCourses
  } else {
    sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
    return sortedCourses
  }
}

const Courses = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(query.sort)
  const navigate = useNavigate()
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  )

  useEffect(() => {
    if (!SORT_KEY.includes(sortKey)) {
      navigate('.')
      setSortKey(undefined)
      setSortedCourses(courses)
    }
  }, [sortKey, navigate])

  return (
    <>
      <h1>{sortKey ? `Sorted by ${sortKey}` : 'Courses'}</h1>
      {sortedCourses.map((course) => (
        <Link to={course.slug} key={course.id}>
          <h2>{course.title}</h2>
        </Link>
      ))}
    </>
  )
}

export default Courses
