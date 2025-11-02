import { AuthType } from "@/components/auth-page";
import { createClient } from "./supabase/client";

const supabase = createClient()

export async function SignUp ({email, password}:AuthType) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    })

    if (error) {
        throw new Error('User cannot be creaated at the moment. Please, try again later', error)
    }

    return data;
}


export async function SignIn ({email, password}:AuthType) {
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) {
        throw new Error('Error while signing in into the account. Please, try again later')
    }

    return data;
    
}
