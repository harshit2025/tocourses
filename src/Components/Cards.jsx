import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {
   let courses=props.courses;
   
   let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    //   let allCourse = [];

    // It Returns list of all courses received from the api Response

    // const getCourses = () => {
    //     Object.values(props.courses).forEach((courseCategory) => {
    //         courseCategory.forEach((course) => {
    //             allCourse.push(course);
    //         });
    //     });
    //     return allCourse;
    // };
    

    const getCourses= () =>{
        if(category=="All"){
        let allCourse=[];
        Object.values(courses).forEach(coursesCategory =>{
            coursesCategory.forEach((course) =>{
   allCourse.push(course);
            } )
        })
    
 return allCourse;
    }
    else{
    //specific card send hoga 
    return courses[category];
    }
}
    //   console.log(allCourse);
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4"> 
        {
     getCourses().map((course) => {
       
       return <Card  key={course.id} course={course} 
        likedCourses={likedCourses}
        setLikedCourses={setLikedCourses} />

     })
        }

        </div>
    );
};

export default Cards;
