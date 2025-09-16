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
        <div className="min-h-screen bg-gray-900">
            <div className="max-w-2xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-white">
                        Add New Song
                    </h1>
                    <Link
                        href="/songs"
                        className="text-blue-400 hover:underline"
                    >
                        ← Back to Songs
                    </Link>
                </div>

                <div className="px-8 pt-6 pb-8 bg-gray-800 rounded shadow-md">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="url"
                                className="block mb-2 text-sm font-bold text-white"
                            >
                                URL *
                            </label>
                            <input
                                type="url"
                                id="url"
                                name="url"
                                value={data.url}
                                onChange={handleChange}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                    errors.url
                                        ? 'border-red-500'
                                        : 'border-gray-600'
                                }`}
                                placeholder="https://example.com/song"
                            />
                            {errors.url && (
                                <p className="mt-1 text-xs italic text-red-400">
                                    {errors.url}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="title"
                                className="block mb-2 text-sm font-bold text-white"
                            >
                                Title *
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={data.title}
                                onChange={handleChange}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                    errors.title
                                        ? 'border-red-500'
                                        : 'border-gray-600'
                                }`}
                                placeholder="Song title"
                            />
                            {errors.title && (
                                <p className="mt-1 text-xs italic text-red-400">
                                    {errors.title}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="artist"
                                className="block mb-2 text-sm font-bold text-white"
                            >
                                Artist
                            </label>
                            <input
                                type="text"
                                id="artist"
                                name="artist"
                                value={data.artist}
                                onChange={handleChange}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                    errors.artist
                                        ? 'border-red-500'
                                        : 'border-gray-600'
                                }`}
                                placeholder="Artist name"
                            />
                            {errors.artist && (
                                <p className="mt-1 text-xs italic text-red-400">
                                    {errors.artist}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="album"
                                className="block mb-2 text-sm font-bold text-white"
                            >
                                Album
                            </label>
                            <input
                                type="text"
                                id="album"
                                name="album"
                                value={data.album}
                                onChange={handleChange}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                    errors.album
                                        ? 'border-red-500'
                                        : 'border-gray-600'
                                }`}
                                placeholder="Album name"
                            />
                            {errors.album && (
                                <p className="mt-1 text-xs italic text-red-400">
                                    {errors.album}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="rating"
                                className="block mb-2 text-sm font-bold text-white"
                            >
                                Rating (1-5)
                            </label>
                            <select
                                id="rating"
                                name="rating"
                                value={data.rating}
                                onChange={handleChange}
                                className={`shadow border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                    errors.rating
                                        ? 'border-red-500'
                                        : 'border-gray-600'
                                }`}
                            >
                                <option value="">Select rating</option>
                                <option value="1">1 ⭐</option>
                                <option value="2">2 ⭐⭐</option>
                                <option value="3">3 ⭐⭐⭐</option>
                                <option value="4">4 ⭐⭐⭐⭐</option>
                                <option value="5">5 ⭐⭐⭐⭐⭐</option>
                            </select>
                            {errors.rating && (
                                <p className="mt-1 text-xs italic text-red-400">
                                    {errors.rating}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="notes"
                                className="block mb-2 text-sm font-bold text-white"
                            >
                                Notes
                            </label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={data.notes}
                                onChange={handleChange}
                                rows="4"
                                className={`shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                    errors.notes
                                        ? 'border-red-500'
                                        : 'border-gray-600'
                                }`}
                                placeholder="Add any notes about this song..."
                            />
                            {errors.notes && (
                                <p className="mt-1 text-xs italic text-red-400">
                                    {errors.notes}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="favorite"
                                    checked={data.favorite}
                                    onChange={handleChange}
                                    className="mr-2 leading-tight"
                                />
                                <span className="text-sm text-white">
                                    Mark as favorite ❤️
                                </span>
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Create Song
                            </button>
                            <Link
                                href="/songs"
                                className="px-4 py-2 font-bold text-white bg-gray-600 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
