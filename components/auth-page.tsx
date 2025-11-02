'use client'

import { SignIn, SignUp } from "@/lib/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {z} from 'zod'

const AuthSchema = z.object({
    email: z.email('Email is required'),
    password: z.string('password is required').min(4, 'Password must be more than 4 character')
})

export type AuthType = z.infer<typeof AuthSchema>;


function AuthPage() {
    const [isSignUp, setIsSignUp] = useState<boolean>(false)
    const router = useRouter()
    const {register, handleSubmit} = useForm<AuthType>({
        resolver: zodResolver(AuthSchema)
    })

    
    function handleAuth (data:AuthType) {

        if(!data.email || !data.password) return 

        
        const email = data.email;
        const password = data.password;

        try {
            if (isSignUp){
                //  signup action
                SignUp({email, password})
                router.push('/profile')
                
            } else {
                // sign in action
                SignIn({email, password})
                router.push('/profile')
            }
        } catch {
            throw new Error("Can't resolve operation")
        }
    }
    
    
    return (
        <section>
            <div className="min-h-screen flex items-center justify-center bg-background dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-md w-full space-y-8 p-8">
                    <div className="text-center">
                        <Link href='/' className="text-4xl font-bold text-primary dark:text-primary mb-2">
                            Flare
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400">
                            {isSignUp ? "Create Your Account" : "Sign in to your account"}
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit(handleAuth)} >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Email
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                // name="email"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-800 dark:text-white"
                                placeholder="Enter your email"
                                {...register('email')}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Password
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="password"
                                type="password"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-800 dark:text-white"
                                placeholder="Enter your password"
                                {...register('password')}
                            />
                        </div>

                        <button
                            type="submit"
                            // disabled={loading}
                            className="w-full flex justify-center py-2 px-4 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary/40 to-secondary/20 hover:from-primary/60 hover:to-secondary/60  disabled:opacity-50 transition-colors duration-300 cursor-pointer"
                        >
                            {isSignUp ? "Sign Up" : "Sign In"}
                        </button>
                    </form>

                    <div className="text-center">
                        <button
                            onClick={() => setIsSignUp(!isSignUp)}
                            className="text-primary dark:text-white hover:text-primary/40 dark:hover:text-primary/40 text-sm"
                        >
                            {isSignUp
                            ? "Already have an account? Sign in"
                            : "Don't have an account? Sign up"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AuthPage;