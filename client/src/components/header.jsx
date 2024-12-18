import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from './ui/button';
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/clerk-react";
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react';


const Header = () => {

    const [showSignIn, setShowSignIn] = useState(false);
    const [search, setSearch] = useSearchParams();

    useEffect(() => {
        if (search.get('sign-in')) {
            setShowSignIn(true);
        }
    }, [search]);

    const handleOverlayClick = (e) => {
        console.log(e.target)
        console.log(e.currentTarget)
        if (e.target === e.currentTarget) {
            setShowSignIn(false);
            setSearch({});
        }
    }

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
                        <Button variant='outline' className='hover:text-white bg-white hover:bg-black text-black'
                            onClick={() => { setShowSignIn(true) }}>
                            login
                        </Button>
                    </SignedOut>
                    <SignedIn>
                        <Link to="/post-job">
                            <Button className="rounded-full bg-black hover:bg-white hover:text-black" variant="destructive" >
                                <PenBox size={20} className='mr-2' />
                                Post a Job</Button>
                        </Link>
                        <UserButton
                        appearance={{
                            elements:{
                                avatarBox: "w-10 h-10"
                            }
                        }}>

                        <UserButton.MenuItems>
                            <UserButton.Link
                                label='My Jobs'
                                labelIcon={<BriefcaseBusiness size={15}/>}
                                href='/my-jobs'
                            />
                            <UserButton.Link
                                label='Saved Jobs'
                                labelIcon={<Heart size={15}/>}
                                href='/saved-jobs'
                            />
                        </UserButton.MenuItems>

                        </UserButton>
                    </SignedIn>
                </div>
            </nav>

            {showSignIn &&
                (
                    <div className='fixed flex justify-center items-center inset-0 bg-black bg-opacity-50'
                        onClick={handleOverlayClick}>
                        <SignIn
                            signUpForceRedirectUrl='/onboarding'
                            fallbaclRedirectUrl='/onboarding'
                        />
                    </div>
                )
            }
        </>
    )
}

export default Header;