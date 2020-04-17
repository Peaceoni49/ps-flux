import React from "react";

function CourseList(props) {
    return (
        <table className="table">
        <thead>
            <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Categort</th>
            </tr>
        </thead>
        <tbody>
            {props.courses.map(course => {
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
    );
}

export default CourseList;