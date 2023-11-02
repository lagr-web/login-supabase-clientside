//src/auth/handleAuth.ts

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/lib/database.types';

const supabase = createClientComponentClient<Database>();


export const getSignUp = async (email: string, password: string) => {

    await supabase.auth.signUp({
        email,
        password
    })


}


export const getSignIn = async (email: string, password: string) => {

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    return data;

}


export const getSignOut = async () => {

    const { error } = await supabase.auth.signOut()

    return (error);


}
