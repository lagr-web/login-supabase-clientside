//src/app/admin/page.tsx

"use client";

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link';
import type { Database } from '@/lib/database.types';
import { getSignOut } from '../../auth/handleAuth';

import { useRouter } from 'next/navigation'

//https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config

export const dynamic = 'force-dynamic';


export default async function Page() {

    const router = useRouter();

    const supabase = createClientComponentClient<Database>();

    const { data: { user } } = await supabase.auth.getUser();


    const handleSignOut = async () => {

        const data = await getSignOut();

        router.refresh();

        router.push('/login');

    }


    return (
        <>

            <nav>

                {user ? (

                    <div className="flex justify-end">
                        <div>
                            <span className="text-gray-400 inline-block align-bottom">Allo, {user.email}</span>
                            {/*  <LogoutButton /> */}
                            <button onClick={((handleSignOut))}>Sign out</button>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-end">
                        <button><Link href="/login">Login</Link></button>
                    </div>
                 )
                }


            </nav>

            <section>

                {user ? (

                    <div>allo, heres some secret stuff...</div>
                ) : (

                    <div>you are not logged in</div>
                )
                }

            </section>



        </>
    )
}
