import React, {useState, useEffect} from "react";
import { getCourses } from "../Api/courseApi";
import CourseList from "./CourseList";


function CoursesPage() {
    const [courses, setCourses ] = useState([]);
useEffect( ()=> {
    getCourses().then(_courses=> setCourses(_courses));
})
        return(
         <>
         <h2>Courses</h2>
         <CourseList courses={courses}/>
       
        </>
     );   
    }

export default CoursesPage;