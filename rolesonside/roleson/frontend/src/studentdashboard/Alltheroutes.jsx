import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Studentdashboard from './Studentdashboard'
import Internshipdynamicpage from './Internshippages/Internshipdynamicpage'

import Theinternshipdetails from "../Resource/Theinternshipdetails"

const Alltheroutes = () => {
    console.log("the internship details array of objects", Theinternshipdetails)

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={< Studentdashboard />} />
                    <Route path="/internshippage1" element={< Internshipdynamicpage heading={Theinternshipdetails[0].heading} content={Theinternshipdetails[0].content} image={Theinternshipdetails[0].image} morecontent={Theinternshipdetails[0].morecontent} />} />
                    <Route path="/internshippage2" element={< Internshipdynamicpage heading={Theinternshipdetails[1].heading} content={Theinternshipdetails[1].content} image={Theinternshipdetails[1].image} morecontent={Theinternshipdetails[1].morecontent} />} />
                    <Route path="/internshippage3" element={< Internshipdynamicpage heading={Theinternshipdetails[2].heading} content={Theinternshipdetails[2].content} image={Theinternshipdetails[2].image} morecontent={Theinternshipdetails[2].morecontent} />} />
                    <Route path="/internshippage4" element={< Internshipdynamicpage heading={Theinternshipdetails[3].heading} content={Theinternshipdetails[3].content} image={Theinternshipdetails[3].image} morecontent={Theinternshipdetails[3].morecontent} />} />
                    <Route path="/internshippage5" element={< Internshipdynamicpage heading={Theinternshipdetails[4].heading} content={Theinternshipdetails[4].content} image={Theinternshipdetails[4].image} morecontent={Theinternshipdetails[4].morecontent} />} />
                    <Route path="/internshippage6" element={< Internshipdynamicpage heading={Theinternshipdetails[5].heading} content={Theinternshipdetails[5].content} image={Theinternshipdetails[5].image} morecontent={Theinternshipdetails[5].morecontent} />} />

                </Routes>
            </Router>
        </div>
    )
}

export default Alltheroutes
