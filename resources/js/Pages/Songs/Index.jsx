import React from 'react';
import { Link, router } from '@inertiajs/react';

export default function Index({ songs }) {
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this song?')) {
            router.delete(`/songs/${id}`);
        }
    };

    return (
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Songs</h1>
                <Link
                    href="/songs/create"
                    className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                    Add New Song
                </Link>
            </div>

            <div className="overflow-hidden bg-white shadow sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    {songs.data.map((song) => (
                        <li key={song.id}>
                            <div className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-indigo-600 truncate">
                                            <Link
                                                href={`/songs/${song.id}`}
                                                className="hover:underline"
                                            >
                                                {song.title}
                                            </Link>
                                            {song.favorite && (
                                                <span className="ml-2 text-red-500">
                                                    ❤️
                                                </span>
                                            )}
                                        </p>
                                        <p className="flex items-center mt-2 text-sm text-gray-500">
                                            {song.artist && (
                                                <span className="mr-4">
                                                    Artist: {song.artist}
                                                </span>
                                            )}
                                            {song.album && (
                                                <span className="mr-4">
                                                    Album: {song.album}
                                                </span>
                                            )}
                                            {song.rating && (
                                                <span>
                                                    Rating:{' '}
                                                    {'⭐'.repeat(song.rating)}
                                                </span>
                                            )}
                                        </p>
                                        <p className="mt-2 text-sm text-gray-500">
                                            <a
                                                href={song.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                {song.url}
                                            </a>
                                        </p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <Link
                                            href={`/songs/${song.id}/edit`}
                                            className="px-3 py-1 text-sm font-bold text-white bg-yellow-500 rounded hover:bg-yellow-600"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(song.id)
                                            }
                                            className="px-3 py-1 text-sm font-bold text-white bg-red-500 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                {song.notes && (
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-600">
                                            {song.notes}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {songs.links.length > 3 && (
                <div className="flex justify-center mt-6 space-x-1">
                    {songs.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url || '#'}
                            className={`px-3 py-2 text-sm rounded ${
                                link.active
                                    ? 'bg-blue-600 text-white'
                                    : link.url
                                    ? 'bg-white text-gray-500 hover:text-gray-700 border'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
