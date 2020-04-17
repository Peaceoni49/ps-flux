import React, {useState, useEffect} from "react";
import { getCourses } from "../Api/courseApi";


function CoursesPage() {
    const [courses, setCourses ] = useState([]);
useEffect( ()=> {
    getCourses().then(_courses=> setCourses(_courses));
})
        return(
         <>
         <h2>Courses</h2>
        <table className="table">
            <thead>
                <tr>
                <th>Title</th>
                <th>Author ID</th>
                <th>Categort</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course => {
                return(
                <tr key={course.id}>
                    <td>{course.title}</td>
                    <td>{course.authorid}</td>
                    <td>{course.category}</td>
                </tr>
                );
                })}
            </tbody>
        </table> 
        </>
     );   
    }

export default CoursesPage;