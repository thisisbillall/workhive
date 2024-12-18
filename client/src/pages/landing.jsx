import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import companies from "../data/companies.json";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import faqs from "../data/faq.json";

import Autoplay from "embla-carousel-autoplay"

export function Example() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
      // ...
        </Carousel>
    )
}


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
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="w-full py-20"
            >
                <CarouselContent className="flex gap-5 sm:gap-16 items-center">
                    {companies.map(({ name, id, path }) => (
                        <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
                            <img
                                src={path}
                                alt={name}
                                className="h-20 sm:h-24 object-contain"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            {/* banner image */}
            <img className='w-full' src="/banner.jpeg" alt="banner" />

            <section className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className='border-none bg-black'>
                    <CardHeader>
                        <CardTitle className="font-bold">For Job Seekers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        Search and apply for jobs, track applications, and more.
                    </CardContent>
                </Card>
                <Card className='border-none bg-black'>
                    <CardHeader>
                        <CardTitle className="font-bold">For Employers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        Post jobs, manage applications, and find the best candidates.
                    </CardContent>
                </Card>
            </section>

            {/* accordian */}

            <Accordion type="multiple" className="w-full mt-14">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </main>
    )
}

export default LandingPage