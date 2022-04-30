import React from 'react'
import Image from 'next/image'

function About() {
    return (
        <div className='bg-slate-100 min-h-[90vh]'>
            <div className='relative h-[20vh] w-[30vw]'>
                <Image
                    src={"/mgd-logo.jpg"}
                    layout="fill"
                    alt="mgdrywall logo"
                />
            </div>
            <h1>About MG Drywall U.S.A</h1>
        </div>
    )
}

export default About