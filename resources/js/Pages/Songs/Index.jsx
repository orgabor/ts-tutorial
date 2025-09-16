import React from 'react';
import { Link, router } from '@inertiajs/react';
import { useEcho } from '@laravel/echo-react';

export default function Index({ songs }) {
    useEcho('songs', 'SongAdded', (e) => {
        router.reload();
    });

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this song?')) {
            router.delete(`/songs/${id}`);
        }
    };

    return (
        <div className="min-h-screen font-mono text-green-400 bg-black">
            <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between pb-4 mb-8 border-b border-green-400">
                    <h1 className="text-4xl font-bold tracking-wider text-green-400">
                        &gt; SONGS_DATABASE
                    </h1>
                    <Link
                        href="/songs/create"
                        className="px-6 py-3 font-bold tracking-wide text-black transition-colors duration-200 bg-green-400 border-2 border-green-400 hover:bg-black hover:text-green-400"
                    >
                        [+ ADD_SONG]
                    </Link>
                </div>

                <div className="bg-gray-900 border-2 border-green-400 shadow-lg shadow-green-400/20">
                    <ul className="divide-y divide-green-400/30">
                        {songs.data.map((song) => (
                            <li key={song.id}>
                                <div className="px-6 py-6 bg-black border-l-4 border-green-400">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <p className="text-lg font-bold tracking-wide text-green-400 truncate">
                                                <Link
                                                    href={`/songs/${song.id}`}
                                                    className="transition-colors duration-150 hover:text-green-300"
                                                >
                                                    &gt; {song.title}
                                                </Link>
                                                {song.favorite && (
                                                    <span className="ml-3 text-red-400 animate-pulse">
                                                        ★
                                                    </span>
                                                )}
                                            </p>
                                            <p className="flex items-center mt-3 font-mono text-sm text-green-300">
                                                {song.artist && (
                                                    <span className="px-2 py-1 mr-6 bg-gray-900 border border-green-400/50">
                                                        ARTIST: {song.artist}
                                                    </span>
                                                )}
                                                {song.album && (
                                                    <span className="px-2 py-1 mr-6 bg-gray-900 border border-green-400/50">
                                                        ALBUM: {song.album}
                                                    </span>
                                                )}
                                                {song.rating && (
                                                    <span className="px-2 py-1 bg-gray-900 border border-green-400/50">
                                                        RATING:{' '}
                                                        {'█'.repeat(
                                                            song.rating,
                                                        )}
                                                        {'░'.repeat(
                                                            5 - song.rating,
                                                        )}
                                                    </span>
                                                )}
                                            </p>
                                            <p className="mt-3 font-mono text-xs text-green-500">
                                                <a
                                                    href={song.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-green-500 underline transition-colors duration-150 hover:text-green-300 decoration-dotted"
                                                >
                                                    → {song.url}
                                                </a>
                                            </p>
                                        </div>
                                        <div className="flex space-x-3">
                                            <Link
                                                href={`/songs/${song.id}/edit`}
                                                className="px-4 py-2 text-sm font-bold tracking-wide text-black transition-colors duration-200 bg-yellow-400 border-2 border-yellow-400 hover:bg-black hover:text-yellow-400"
                                            >
                                                [EDIT]
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(song.id)
                                                }
                                                className="px-4 py-2 text-sm font-bold tracking-wide text-black transition-colors duration-200 bg-red-400 border-2 border-red-400 hover:bg-black hover:text-red-400"
                                            >
                                                [DEL]
                                            </button>
                                        </div>
                                    </div>
                                    {song.notes && (
                                        <div className="pt-4 mt-4 border-t border-green-400/30">
                                            <p className="p-3 font-mono text-sm text-green-300 bg-gray-900 border-l-2 border-green-400">
                                                // {song.notes}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {songs.links.length > 3 && (
                    <div className="flex justify-center mt-8 space-x-2">
                        {songs.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || '#'}
                                className={`px-4 py-2 text-sm font-mono font-bold border-2 transition-colors duration-200 ${
                                    link.active
                                        ? 'bg-green-400 text-black border-green-400'
                                        : link.url
                                        ? 'bg-black text-green-400 border-green-400 hover:bg-green-400 hover:text-black'
                                        : 'bg-gray-900 text-gray-600 border-gray-600 cursor-not-allowed'
                                }`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
