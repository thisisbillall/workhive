import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { PenBox } from 'lucide-react';


const Header = () => {
    return (
        <>
            <nav className="p-4 flex justify-between items-center">
                <Link to='/'>
                    {/* <img className="ml-4 h-20" src="logo-dark.png" alt="logo" /> */}
                    <span className='text-4xl font-bold'>WORK<span className='text-white'>HIVE</span></span>
                </Link>
                <div className="flex gap-8 p-8">
                    <SignedOut>
                        {/* <SignInButton /> */}
                        <Button variant='outline' className='hover:text-white bg-white hover:bg-black text-black'>
                            login
                        </Button>
                    </SignedOut>
                    <SignedIn>
                        <Link to="/post-job">
                            <Button className="rounded-full bg-black hover:bg-white hover:text-black" variant="destructive" >
                                <PenBox size={20} className='mr-2' />
                                Post a Job</Button>
                        </Link>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </>
    )
}

export default Header;