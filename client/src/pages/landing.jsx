import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <main className='p-8 justify-center items-center'>
            <section className='text-center'>
                {/* banner title */}

                <p className='font-bold text-4xl sm:text-6xl lg:text-8xl text-bold'>Find Your Dream Job
                    <span className='block'>and get Hired.</span></p>

                <p className='text-xs sm:text-lg lg:text-xl mt-8'>Explore thousands of job listings or find the perfect candidate.</p>
            </section>

            {/* buttons */}
            <div className='m-6 gap-3 flex justify-center'>
                <Link to='/jobs'>
                    <Button variant='outline' className='text-white hover:bg-white hover:text-black'>
                        Find Jobs
                    </Button>
                </Link>
                <Link to='/post-job'>
                    <Button variant='outline' className='text-white hover:bg-white hover:text-black'>
                        Post Jobs
                    </Button>
                </Link>
            </div>

            {/* carousel */}

            {/* banner image */}

            {/* accordian */}
        </main>
    )
}

export default LandingPage