import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen bg-black font-mono text-green-400 flex items-center justify-center">
            <div className="text-center border-2 border-green-400 p-12 bg-gray-900 shadow-lg shadow-green-400/20">
                <div className="mb-8">
                    <pre className="text-green-400 text-sm mb-4">
                        {`┌─────────────────────────┐
│       L I Z Z E N       │
│   MUSIC DATABASE v1.0   │
└─────────────────────────┘`}
                    </pre>
                </div>
                <h1 className="text-4xl font-bold text-green-400 mb-6 tracking-wider">
                    &gt; SYSTEM_READY
                </h1>
                <p className="text-xl text-green-300 mb-8 tracking-wide">
                    // Your retro music collection manager
                </p>
                <a
                    href="/songs"
                    className="inline-block px-8 py-4 font-bold text-black bg-green-400 border-2 border-green-400 hover:bg-black hover:text-green-400 transition-colors duration-200 tracking-wider"
                >
                    [ACCESS_DATABASE]
                </a>
                <div className="mt-8 text-xs text-green-500">
                    <p>&gt; Press [ACCESS_DATABASE] to continue...</p>
                </div>
            </div>
        </div>
    );
}
