import React from 'react'
import './landing.css';
import Logo from './Logo1.png'
import person from './person.png'
import { NavLink } from 'react-router-dom';

function LandingPage() {
    return (
        <div className='home'>
            <header className="header">
                <img src={Logo} alt="Logo" className="logo" />
                <h1 className="title">ACEmployee Management System</h1>
            </header>
            <section>
                <div className="full-height-section">
                    {/* Image Section */}
                    <div className="image-container">
                        <img
                            src={person}
                            alt="Nature"
                            className="responsive-image"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="text-container">
                        <h2>Ace Engineering College</h2>
                        <p>
                        A college is an educational institution that provides higher education and specialized training in various fields. It serves as a place for academic growth, skill development, and career preparation. Colleges also foster social connections, extracurricular activities, and research opportunities for students.
                        </p>
                        <NavLink to='/login'><button>Login</button></NavLink>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage
