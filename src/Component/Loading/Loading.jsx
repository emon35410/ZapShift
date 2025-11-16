import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="relative">
                {/* Outer rotating ring */}
                <div className="w-32 h-32 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>

                {/* Middle rotating ring */}
                <div className="absolute top-2 left-2 w-28 h-28 border-4 border-pink-500/30 border-t-pink-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>

                {/* Inner pulsing circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse"></div>

                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
            </div>

            {/* Loading text */}
            <div className="absolute mt-48">
                <p className="text-white text-xl font-light tracking-wider animate-pulse">Loading...</p>
            </div>
        </div>
    );
};

export default Loading;