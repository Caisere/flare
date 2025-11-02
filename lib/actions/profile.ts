'use server'

// import { createClient } from "../supabase/client";

import { createClient } from "../supabase/server"




export async function getCurrentUserProfile() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if(!user) return null

    const userId = user.id;

    const {data: profileData, error} = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single()

    if(error) {
        throw new Error("Error fetching profile:", error)
        return null
    }

    return profileData
}