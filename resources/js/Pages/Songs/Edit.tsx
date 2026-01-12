import React, { useState } from 'react';
import { Link, router, useForm } from '@inertiajs/react';

export default function Edit({ song, }:
    {
        song: {
            url: string;
            title: string;
            artist: string;
            album: string;
            notes: string;
            rating: number;
            favorite: boolean;
            tags: {
                label: string;
                value: string;
            }[];
        }
    }) {
    const { put, data, setData, errors } = useForm({
        url: song.url || '',
        title: song.title || '',
        artist: song.artist || '',
        album: song.album || '',
        notes: song.notes || '',
        rating: song.rating || '',
        favorite: song.favorite || false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/songs/${song.id}`);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <div className="min-h-screen bg-black font-mono text-green-400">
            <div className="max-w-2xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
                <div className="mb-8 border-b border-green-400 pb-4">
                    <h1 className="text-4xl font-bold text-green-400 tracking-wider">
                        &gt; EDIT_SONG.exe
                    </h1>
                    <Link
                        href="/songs"
                        className="text-green-400 hover:text-green-300 transition-colors duration-150 tracking-wide"
                    >
                        &lt;- [BACK_TO_DATABASE]
                    </Link>
                </div>

                <div className="bg-black border-2 border-green-400 shadow-lg shadow-green-400/20 p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="url"
                                className="block mb-2 text-sm font-bold text-green-400 tracking-wide"
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
                                <p className="mt-2 text-sm text-red-400 bg-gray-900 px-2 py-1 border-l-4 border-red-400">
                                    ERROR: {errors.url}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="title"
                                className="block mb-2 text-sm font-bold text-green-400 tracking-wide"
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
                                placeholder="Song title string"
                            />
                            {errors.title && (
                                <p className="mt-2 text-sm text-red-400 bg-gray-900 px-2 py-1 border-l-4 border-red-400">
                                    ERROR: {errors.title}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="artist"
                                className="block mb-2 text-sm font-bold text-green-400 tracking-wide"
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
                                placeholder="Artist name string"
                            />
                            {errors.artist && (
                                <p className="mt-2 text-sm text-red-400 bg-gray-900 px-2 py-1 border-l-4 border-red-400">
                                    ERROR: {errors.artist}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="album"
                                className="block mb-2 text-sm font-bold text-green-400 tracking-wide"
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
                                placeholder="Album name string"
                            />
                            {errors.album && (
                                <p className="mt-2 text-sm text-red-400 bg-gray-900 px-2 py-1 border-l-4 border-red-400">
                                    ERROR: {errors.album}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="rating"
                                className="block mb-2 text-sm font-bold text-green-400 tracking-wide"
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
                                <p className="mt-2 text-sm text-red-400 bg-gray-900 px-2 py-1 border-l-4 border-red-400">
                                    ERROR: {errors.rating}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="notes"
                                className="block mb-2 text-sm font-bold text-green-400 tracking-wide"
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
                                <p className="mt-2 text-sm text-red-400 bg-gray-900 px-2 py-1 border-l-4 border-red-400">
                                    ERROR: {errors.notes}
                                </p>
                            )}
                        </div>

                        <div className="mb-8">
                            <label className="flex items-center bg-gray-900 px-4 py-3 border-2 border-green-400/50 hover:border-green-400 transition-colors duration-200">
                                <input
                                    type="checkbox"
                                    name="favorite"
                                    checked={data.favorite}
                                    onChange={handleChange}
                                    className="mr-3 w-4 h-4 text-green-400 bg-black border-2 border-green-400 focus:ring-green-400 focus:ring-2"
                                />
                                <span className="text-sm text-green-400 font-mono tracking-wide">
                                    [✓] MARK_AS_FAVORITE
                                    {data.favorite && (
                                        <span className="text-red-400 animate-pulse ml-2">
                                            ★
                                        </span>
                                    )}
                                </span>
                            </label>
                        </div>

                        <div className="flex items-center justify-between border-t border-green-400/50 pt-6">
                            <button
                                type="submit"
                                className="px-6 py-3 font-bold text-black bg-green-400 border-2 border-green-400 hover:bg-black hover:text-green-400 transition-colors duration-200 font-mono tracking-wider"
                            >
                                [EXECUTE_UPDATE]
                            </button>
                            <Link
                                href="/songs"
                                className="px-6 py-3 font-bold text-green-400 bg-black border-2 border-green-400 hover:bg-green-400 hover:text-black transition-colors duration-200 font-mono tracking-wider"
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
