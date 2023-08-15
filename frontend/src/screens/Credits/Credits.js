import React from 'react'
import "./Credits.css"
import Mar from "../Mar/Mar"
import { Link } from 'react-router-dom'
const Credits = () => {
    return (

        <div className='credit'>
            <h2>
                <span className='lnk'>
                    <Link to="/mar">MAR </Link>
                </span>
                Points
            </h2>
            <p>
                Mandatory Additional Requirement (MAR) is an integral part of the under-graduate (UG)
                course curriculum of Maulana Abul Kalam Azad University of Technology(MAKAUT), WB.
                This is launched for all round development of the student of the university.
                MAKAUT introduced it in 2018-19 to promote extracurricular activities among students.
                Participating in college programme and seminar, Social Developmental Activities,
                Environmental Protection (like tree plantation, sprade awareness among people), Enrollment
                in Online courses, Actively participating in Webinars, undertaking Entrepreneurial
                Activities and so on.</p>
            <h2>
                <span className='lnk'>
                    <Link to="/moocs">MOOCs </Link>
                </span>
                Points
            </h2>
            <p>
                MOOCs are massive open online courses. Each of the terms massive, open and online have some
                degree of flexibility in meaning, which has resulted in difficulty pinning down an exact
                definition for what constitutes a MOOC, beyond being an online course that is open in some
                capacity to any learner worldwide. The term MOOCs was originally coined by Dave Cormier of the
                University of Prince Edward Island in 2008 for a large online class taught by George Seimens
                of Athabasca University and Stephen Downes of Canada's National Research Council Canada.
                There are now several leading platforms that host the majority of MOOCs namely Coursera,
                Udacity & EdX (FutureLearn in the UK).
            </p>
        </div>
    )
}

export default Credits