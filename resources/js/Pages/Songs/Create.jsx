import React, { useState } from 'react';
import { Link, router, useForm } from '@inertiajs/react';

export default function Create() {
    const { post, data, setData, errors } = useForm({
        url: '',
        title: '',
        artist: '',
        album: '',
        notes: '',
        rating: '',
        favorite: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/songs');
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <div className="min-h-screen font-mono text-green-400 bg-black">
            <div className="max-w-2xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
                <div className="pb-4 mb-8 border-b border-green-400">
                    <h1 className="text-4xl font-bold tracking-wider text-green-400">
                        &gt; ADD_NEW_SONG.exe
                    </h1>
                    <Link
                        href="/songs"
                        className="tracking-wide text-green-400 transition-colors duration-150 hover:text-green-300"
                    >
                        &lt;- [BACK_TO_DATABASE]
                    </Link>
                </div>

                <div className="p-6 bg-black border-2 border-green-400 shadow-lg shadow-green-400/20">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="url"
                                className="block mb-2 text-sm font-bold tracking-wide text-green-400"
                            >
                                // URL_PATH [REQUIRED]
                            </label>
                            <input
                                type="url"
                                id="url"
                                name="url"
                                value={data.url}
                                onChange={handleChange}
                                className={`font-mono border-2 w-full py-3 px-4 bg-black text-green-400 leading-tight focus:outline-none focus:border-green-300 transition-colors duration-200 ${
                                    errors.url
                                        ? 'border-red-400 text-red-300'
                                        : 'border-green-400'
                                }`}
                                placeholder="https://music.platform.com/track"
                            />
                            {errors.url && (
                                <p className="px-2 py-1 mt-2 text-sm text-red-400 bg-gray-900 border-l-4 border-red-400">
                                    ERROR: {errors.url}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="title"
                                className="block mb-2 text-sm font-bold tracking-wide text-green-400"
                            >
                                // TITLE [REQUIRED]
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={data.title}
                                onChange={handleChange}
                                className={`font-mono border-2 w-full py-3 px-4 bg-black text-green-400 leading-tight focus:outline-none focus:border-green-300 transition-colors duration-200 ${
                                    errors.title
                                        ? 'border-red-400 text-red-300'
                                        : 'border-green-400'
                                }`}
                                placeholder="song_title"
                            />
                            {errors.title && (
                                <p className="px-2 py-1 mt-2 text-sm text-red-400 bg-gray-900 border-l-4 border-red-400">
                                    ERROR: {errors.title}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="artist"
                                className="block mb-2 text-sm font-bold tracking-wide text-green-400"
                            >
                                // ARTIST [OPTIONAL]
                            </label>
                            <input
                                type="text"
                                id="artist"
                                name="artist"
                                value={data.artist}
                                onChange={handleChange}
                                className={`font-mono border-2 w-full py-3 px-4 bg-black text-green-400 leading-tight focus:outline-none focus:border-green-300 transition-colors duration-200 ${
                                    errors.artist
                                        ? 'border-red-400 text-red-300'
                                        : 'border-green-400'
                                }`}
                                placeholder="artist_name"
                            />
                            {errors.artist && (
                                <p className="px-2 py-1 mt-2 text-sm text-red-400 bg-gray-900 border-l-4 border-red-400">
                                    ERROR: {errors.artist}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="album"
                                className="block mb-2 text-sm font-bold tracking-wide text-green-400"
                            >
                                // ALBUM [OPTIONAL]
                            </label>
                            <input
                                type="text"
                                id="album"
                                name="album"
                                value={data.album}
                                onChange={handleChange}
                                className={`font-mono border-2 w-full py-3 px-4 bg-black text-green-400 leading-tight focus:outline-none focus:border-green-300 transition-colors duration-200 ${
                                    errors.album
                                        ? 'border-red-400 text-red-300'
                                        : 'border-green-400'
                                }`}
                                placeholder="album_name"
                            />
                            {errors.album && (
                                <p className="px-2 py-1 mt-2 text-sm text-red-400 bg-gray-900 border-l-4 border-red-400">
                                    ERROR: {errors.album}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="rating"
                                className="block mb-2 text-sm font-bold tracking-wide text-green-400"
                            >
                                // RATING [1-5]
                            </label>
                            <select
                                id="rating"
                                name="rating"
                                value={data.rating}
                                onChange={handleChange}
                                className={`font-mono border-2 w-full py-3 px-4 bg-black text-green-400 leading-tight focus:outline-none focus:border-green-300 transition-colors duration-200 ${
                                    errors.rating
                                        ? 'border-red-400 text-red-300'
                                        : 'border-green-400'
                                }`}
                            >
                                <option value="">SELECT_RATING</option>
                                <option value="1">1 [█░░░░]</option>
                                <option value="2">2 [██░░░]</option>
                                <option value="3">3 [███░░]</option>
                                <option value="4">4 [████░]</option>
                                <option value="5">5 [█████]</option>
                            </select>
                            {errors.rating && (
                                <p className="px-2 py-1 mt-2 text-sm text-red-400 bg-gray-900 border-l-4 border-red-400">
                                    ERROR: {errors.rating}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="notes"
                                className="block mb-2 text-sm font-bold tracking-wide text-green-400"
                            >
                                // NOTES [TEXT_AREA]
                            </label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={data.notes}
                                onChange={handleChange}
                                rows="4"
                                className={`font-mono border-2 w-full py-3 px-4 bg-black text-green-400 leading-tight focus:outline-none focus:border-green-300 transition-colors duration-200 resize-none ${
                                    errors.notes
                                        ? 'border-red-400 text-red-300'
                                        : 'border-green-400'
                                }`}
                                placeholder="// Additional notes and comments here..."
                            />
                            {errors.notes && (
                                <p className="px-2 py-1 mt-2 text-sm text-red-400 bg-gray-900 border-l-4 border-red-400">
                                    ERROR: {errors.notes}
                                </p>
                            )}
                        </div>

                        <div className="mb-8">
                            <label className="flex items-center px-4 py-3 transition-colors duration-200 bg-gray-900 border-2 border-green-400/50 hover:border-green-400">
                                <input
                                    type="checkbox"
                                    name="favorite"
                                    checked={data.favorite}
                                    onChange={handleChange}
                                    className="w-4 h-4 mr-3 text-green-400 bg-black border-2 border-green-400 focus:ring-green-400 focus:ring-2"
                                />
                                <span className="font-mono text-sm tracking-wide text-green-400">
                                    [✓] MARK_AS_FAVORITE
                                    {data.favorite && (
                                        <span className="ml-2 text-red-400 animate-pulse">
                                            ★
                                        </span>
                                    )}
                                </span>
                            </label>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-green-400/50">
                            <button
                                type="submit"
                                className="px-6 py-3 font-mono font-bold tracking-wider text-black transition-colors duration-200 bg-green-400 border-2 border-green-400 hover:bg-black hover:text-green-400"
                            >
                                [EXECUTE_CREATE]
                            </button>
                            <Link
                                href="/songs"
                                className="px-6 py-3 font-mono font-bold tracking-wider text-green-400 transition-colors duration-200 bg-black border-2 border-green-400 hover:bg-green-400 hover:text-black"
                            >
                                [CANCEL_OP]
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
