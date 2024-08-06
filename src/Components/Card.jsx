import React from 'react'
import { FcLike, } from 'react-icons/fc';
import { toast } from 'react-toastify';



 const Card = (props) => {
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;
  function clickHandler(){
 if(likedCourses.includes(course.id)){
  setLikedCourses((prev) =>prev.filter( (cid)=>(cid !==course.id)));
 }
 else{
  //insert in liked courses
  if(likedCourses.length===0){
    setLikedCourses([course.id]);
  }
  else{
    setLikedCourses((prev)=>([...prev , course.id]));
  }
  toast.success("Liked successfully");
 }
  }
  let course=props.course;
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
    <div  className="relative z-10">
       <img src={course.image.url}/> 
       </div>
     <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3 
     grid place-items-center">

        <button onClick={clickHandler}>
            <FcLike fontSize="1.75rem"/>
        </button>
     </div>
<div className='p-4'>
<p className=" text-white font-semibold text-lg leading-6">
{course.title}
</p>
<p className="mt-2 text-white ">
{course.description}
</p>
</div>


    </div>
  )
}

export default Card
