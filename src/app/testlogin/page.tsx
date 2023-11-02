'use client';

import { useEffect, useRef, useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <>

            <div className="container mx-auto p-5 my-10 w-96 shadow-md" >

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

                    <button>Sign up</button>
                    <button>Sign in</button>
                    <button>Sign out</button>

                </div>

                <div>Fejl i login. Prøv igen ...</div>

            </div >
        </>
    )
}