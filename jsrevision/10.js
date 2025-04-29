// destructuring

const course = {
    courseName : "JS in Nepali",
    price : 999,
    courseTeacher : "Sanjay Gupta"
}

//console.log(course.courseTeacher);

const {courseTeacher : instructor} = course;
 console.log(instructor);

