import React from 'react';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';

export default function ErrorPage() {
    const handleRefresh = () => {
        window.location.reload();
    };

    const handleHome = () => {
        window.location.href = '/';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
                {/* Error Icon */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-500 blur-3xl opacity-30 animate-pulse"></div>
                        <AlertCircle className="w-32 h-32 text-red-400 relative z-10" strokeWidth={1.5} />
                    </div>
                </div>

                {/* Error Content */}
                <div className="text-center space-y-6">
                    <h1 className="text-8xl font-bold text-white mb-4">
                        <span className="bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">
                            404
                        </span>
                    </h1>

                    <h2 className="text-3xl font-semibold text-white mb-2">
                        Oops! Page Not Found
                    </h2>

                    <p className="text-gray-300 text-lg max-w-md mx-auto">
                        The page you're looking for seems to have wandered off into the digital void.
                        Don't worry, it happens to the best of us.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                        <button
                            onClick={handleHome}
                            className="group flex hover:cursor-pointer items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                        >
                            <Home className="w-5 h-5" />
                            Go Home
                        </button>

                        <button
                            onClick={handleRefresh}
                            className="group flex items-center gap-2 px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200 backdrop-blur-sm"
                        >
                            <RefreshCw className="w-5 h-5 hover:cursor-pointer group-hover:rotate-180 transition-transform duration-500" />
                            Try Again
                        </button>
                    </div>

                    {/* Additional Help */}
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-gray-400 text-sm">
                            Need help? Contact us at{' '}
                            <a href="mailto:support@example.com" className="text-purple-400 hover:text-purple-300 underline">
                                support@ZapShift.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
            </div>
        </div>
    );
}