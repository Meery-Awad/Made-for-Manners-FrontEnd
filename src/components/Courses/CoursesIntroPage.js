import './CoursesIntroPage.scss'
import { NavLink } from 'react-router-dom';

const Intro = () => {
    return (
        <div className="intro-container">
            <section className="intro-section">
                <div className="intro-image right">
                    <img src="https://media.istockphoto.com/id/1805893169/photo/young-businesswoman-carefully-listening-to-a-colleague.jpg?s=2048x2048&w=is&k=20&c=IbmMG9bVECQ6PIGKoDPAVaGNG-xvkRKj-uyYS_S8igA=" alt="Face to Face Courses" />
                </div>
                <div className="intro-text left">
                    <h2>Face-to-Face Courses</h2>
                    <p>
                        Learn directly with our instructors through in-person classes designed
                        for practical learning and real interaction.
                    </p>
                    <NavLink to="/coursesdetelias"
                        className="intro-btn"
                        state={{ courseType: 'Face-to-Face Course' }}
                    >
                        View Face-to-Face Courses
                    </NavLink>
                </div>
            </section>

            <section className="intro-section reverse">
                <div className="intro-image left">
                    <img src="https://media.istockphoto.com/id/1333547908/photo/smiling-woman-have-webcam-online-meeting-on-computer.jpg?s=2048x2048&w=is&k=20&c=2RzcfjnRKoeKSQjIpS-JT3Nw4R_amYO40lXA9huC724=" alt="Online Courses" />
                </div>
                <div className="intro-text right">
                    <h2>Online Courses</h2>
                    <p>
                        Access all our online courses anytime and from anywhere with flexible
                        schedules and high-quality content.
                    </p>
                    <NavLink to="/coursesdetelias"
                        className="intro-btn"
                        state={{ courseType: 'Online Course' }}
                    >
                        View Online Courses
                    </NavLink>
                </div>
            </section>
        </div>
    )
}


export default Intro
