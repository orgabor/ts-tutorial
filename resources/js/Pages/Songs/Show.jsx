import React from 'react';
import { Link, router } from '@inertiajs/react';

export default function Show({ song }) {
    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this song?')) {
            router.delete(`/songs/${song.id}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <Link
                        href="/songs"
                        className="text-blue-400 hover:underline"
                    >
                        ← Back to Songs
                    </Link>
                </div>

                <div className="bg-gray-800 shadow-md rounded-lg px-8 pt-6 pb-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">
                                {song.title}
                                {song.favorite && (
                                    <span className="ml-3 text-red-500">
                                        ❤️
                                    </span>
                                )}
                            </h1>
                            {song.artist && (
                                <p className="text-lg text-gray-300">
                                    by {song.artist}
                                </p>
                            )}
                            {song.album && (
                                <p className="text-md text-gray-400">
                                    from {song.album}
                                </p>
                            )}
                        </div>
                        <div className="flex space-x-2">
                            <Link
                                href={`/songs/${song.id}/edit`}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                Song Details
                            </h3>
                            <dl className="space-y-3">
                                <div>
                                    <dt className="text-sm font-medium text-gray-400">
                                        URL
                                    </dt>
                                    <dd className="mt-1 text-sm text-white">
                                        <a
                                            href={song.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:underline break-all"
                                        >
                                            {song.url}
                                        </a>
                                    </dd>
                                </div>

                                {song.artist && (
                                    <div>
                                        <dt className="text-sm font-medium text-gray-400">
                                            Artist
                                        </dt>
                                        <dd className="mt-1 text-sm text-white">
                                            {song.artist}
                                        </dd>
                                    </div>
                                )}

                                {song.album && (
                                    <div>
                                        <dt className="text-sm font-medium text-gray-400">
                                            Album
                                        </dt>
                                        <dd className="mt-1 text-sm text-white">
                                            {song.album}
                                        </dd>
                                    </div>
                                )}

                                {song.rating && (
                                    <div>
                                        <dt className="text-sm font-medium text-gray-400">
                                            Rating
                                        </dt>
                                        <dd className="mt-1 text-sm text-white">
                                            {'⭐'.repeat(song.rating)} (
                                            {song.rating}/5)
                                        </dd>
                                    </div>
                                )}

                                <div>
                                    <dt className="text-sm font-medium text-gray-400">
                                        Favorite
                                    </dt>
                                    <dd className="mt-1 text-sm text-white">
                                        {song.favorite ? '❤️ Yes' : '❌ No'}
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        {song.notes && (
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">
                                    Notes
                                </h3>
                                <div className="bg-gray-700 rounded-lg p-4">
                                    <p className="text-sm text-gray-300 whitespace-pre-wrap">
                                        {song.notes}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-600">
                        <div className="text-sm text-gray-400">
                            <p>
                                Created:{' '}
                                {new Date(song.created_at).toLocaleDateString()}
                            </p>
                            {song.updated_at !== song.created_at && (
                                <p>
                                    Updated:{' '}
                                    {new Date(
                                        song.updated_at,
                                    ).toLocaleDateString()}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
