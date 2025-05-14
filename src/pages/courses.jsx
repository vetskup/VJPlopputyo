import Navbar from "../components/navbar"

import CourseCard from "../components/CourseCard"


function Courses () {
  return (
        <>
            <Navbar />

            <div className="courses-list">
                <h2>Valitse sinua kiinnostavat kurssit</h2>

                <h3>Tuotantotalous</h3>
                <CourseCard
                    title="Tuotantotalous 1"
                    description="Kurssilla opetellaan, miten tuotantojärjestelmät- ja prosessit toimivat..."
                />

                <CourseCard
                    title="Operaatioiden johtaminen"
                    description="sa dlkfj aldfkjalsdfk alsdkfj flaksjf lakjfd lakjs dflaksj lakjfd..."
                />

                <h3>Ohjelmointi</h3>

                <CourseCard
                    title="Ohjelmointi 01"
                    description="Tämä kurssi lähtee ohjelmoinnin alkeista ja siinä pääset itse..."
                />

                <CourseCard
                    title="Verkkojulkaisun perusteet"
                    description="Pääset tekemään itse omat verkkosivusi"
                />
            </div>
        </>  
    )
    }

export default Courses
