import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'
const SingleCourses = () => {
  const params = useParams()
  console.log(params)
  const navigate = useNavigate()

  const course = courses.find((course) => course.slug === params.slug)

  useEffect(() => {
    if (!course) {
      navigate('../not-found', { relative: 'path' })
    }
  }, [course, navigate])

  // Simply show NotFound
  // if (!course) {
  //   return (
  //     <>
  //       <NotFound />
  //       <Link to=".." relative="path">
  //         Return Courses
  //       </Link>
  //     </>
  //   )
  // }
  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        All Courses
      </Link>
    </>
  )
}

export default SingleCourses
