//src/app/login/page.tsx

'use client';

//import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
//import type { Database } from '@/lib/database.types';
import { getSignUp, getSignIn, getSignOut } from '../../auth/handleAuth';


export default function Login() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const notLoggedIn = useRef<HTMLDivElement | null>(null);

    const router = useRouter();

    //const supabase = createClientComponentClient<Database>();


    const handleSignUp = () => {

        getSignUp(email, password);

        router.refresh();

    }


    const handleSignIn = async () => {

        const data = await getSignIn(email, password);

        if (data.user != null) {

            router.push('/admin');

        } else {

            if (notLoggedIn.current) {
                notLoggedIn.current.style.display = "block";
            }
            router.refresh();

        }

    }

    const handleSignOut = async () => {

        const data = await getSignOut();

        console.log(data);

        router.refresh();
    }


    useEffect(() => {

        if (notLoggedIn.current) notLoggedIn.current.style.display = "none";

    }, [])

    return (
        <>

            <div className="container mx-auto p-5 my-10 w-96 shadow-md">

                <div className="mb-4">
                    <label>Email</label>
                    <input
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="mb-6">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div className="flex justify-center">
                    <button onClick={handleSignUp}>Sign up</button>
                    <button onClick={handleSignIn}>Sign in</button>
                    <button onClick={handleSignOut}>Sign out</button>
                </div>

                <div ref={notLoggedIn} id="feedback">Fejl i login. Prøv igen ...</div>
            </div >
        </>
    )
}