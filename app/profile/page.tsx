import { ProfileSkeleton } from "@/components/skeletons/profile-skeleton";
import UserDetails from "@/components/user-details";
import { Suspense } from "react";

async function UserProfile() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        My Profile
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Manage your profile and preferences
                    </p>
                </header>
                <Suspense fallback={<ProfileSkeleton />}>
                    <UserDetails />
                </Suspense>
            </div>
        </div>
    )
}


export default UserProfile;