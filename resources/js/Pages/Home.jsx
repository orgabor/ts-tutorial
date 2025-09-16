import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4">
                    Welcome to Lizzen
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                    Your music collection manager!
                </p>
                <a
                    href="/songs"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
                >
                    Manage Songs
                </a>
            </div>
        </div>
    );
}
