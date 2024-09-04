import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';
import Courses from '../../Files/courses.json';

const Menu = () => {
    const navigate = useNavigate();

    const [count, setCount] = useState(0);
    const [enrolledCourses, setEnrolledCourses] = useState(new Set());
    const [show, setShow] = useState([]);

    const handleDetails = (id) => {
        navigate(`/details/${id}`);
    };

    const handleCount = (id, name, price) => {
        if (enrolledCourses.has(id)) {
            alert("You have already enrolled in this course.");
        } else {
            alert('The Course is added to the Top of the Profile');
            setEnrolledCourses(new Set(enrolledCourses).add(id));
            setCount(count + 1);
            setShow([...show, { name, price }]);  
        }
    };

    return (
        <div className='container mt-5'>
            <div>
                <h2>We Offer {Courses.length} Courses</h2>
                <p>Enrolled Courses: <span style={{ fontWeight: 'bold', color: 'green' }}>{count}</span></p> 
                <h3>
                    {show.map((course, index) => (
                        <div key={index} style={{display:'flex',justifyContent:'space-between'}}>
                            <h3>{course.name}</h3>
                            <h3>${course.price}</h3>
                        </div>
                    ))}
                </h3>
                {Courses.map((course, index) => (
                    <div key={index}>
                        <div className='mt-5 courses-section'>
                            <div className='row'>
                                <div className='col-12 course'>
                                    <div className='image-section'>
                                        <img src={course.img} alt={course.name} style={{ width: '40%', height: 'auto' }} />
                                    </div>
                                    <div className='offered-section'>
                                        <h6>Course by: <span style={{ color: 'green' }}>{course.offered_by}</span></h6>
                                    </div>
                                    <div className='mt-4 mb-2'>
                                        <p style={{ fontWeight: 'bolder' }}>{course.name}</p>
                                        <p>${course.price}</p>
                                        <button className='btn btn-success' onClick={() => handleDetails(course.id)}>Details</button><br />
                                        <button className='btn btn-success'  onClick={() => handleCount(course.id, course.name, course.price)}>Enroll Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
