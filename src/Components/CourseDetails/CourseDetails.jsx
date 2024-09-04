import React from 'react';
import { useParams } from 'react-router-dom';
import Courses from '../../Files/courses.json';
import './CourseDetails.css'; 

const Details = () => {
    const { id } = useParams();
    const course = Courses.find(course => course.id === id);

    return (
        <div className='container mt-5'>
            <div className='course-details'>
                <h2 className='name'>{course.name}</h2>
                <img src={course.img} alt={course.name} style={{ width: '50%', height: 'auto',display:'block',margin:'5px auto'}} />
                <p>{course.description}</p> 
                <p style={{ fontWeight: 'bold' }}>Enrollment Price: ${course.price}</p>
                <p><b>A Course by : </b><span style={{color:'green',fontWeight:'bold'}}>{course.offered_by}</span></p>
                <p className='focused-on'><strong>Focused on</strong></p>
                <ul style={{textAlign:'center',listStyle:'none'}}>
                    {
                        course.key_experties.map(exp => <h4> <li>{exp}</li></h4> )
                    }
                </ul>
                <p><strong>Objectives :</strong> {course.main_goal}</p>
                <p><strong>Precautions :</strong> {course.precautions}</p>
                <a href='/courses'><button className='btn btn-success'>Back</button></a>
                </div>
        </div>
    );
};

export default Details;
