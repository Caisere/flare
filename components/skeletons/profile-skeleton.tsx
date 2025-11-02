export function ProfileSkeleton () {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 h-[450px]"></div>
                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 h-36"></div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 h-36"></div>
                </div>
            </div>
        </div>
    )
}
