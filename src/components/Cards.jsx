import React, { useState } from 'react'
import Card from './Card'

function Cards(props) {
    let courses = props.courses
    let category = props.category

    const [likedCourses, setLikedCourses] = useState([])

    function getCourses() {
        if (category === "All") {
            let allCourses = []
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData)
                })
            })
            return allCourses
        } else {
            // Only pass specific category's array
            return courses[category]
        }
    }

    

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {courses.length === 0 ? (
                <div>
                    <h1>NO DATA FOUND</h1>
                </div>
            ) : (
                getCourses().map((course) => (
                    <Card
                        key={course.id}
                        course={course}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                    />
                ))
            )}
        </div>
    )
}

export default Cards
