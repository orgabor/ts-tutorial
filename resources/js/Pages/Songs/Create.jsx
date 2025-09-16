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
        <div className="max-w-2xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                    Add New Song
                </h1>
                <Link href="/songs" className="text-blue-600 hover:underline">
                    ← Back to Songs
                </Link>
            </div>

            <div className="px-8 pt-6 pb-8 bg-white rounded shadow-md">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="url"
                            className="block mb-2 text-sm font-bold text-gray-700"
                        >
                            URL *
                        </label>
                        <input
                            type="url"
                            id="url"
                            name="url"
                            value={data.url}
                            onChange={handleChange}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                errors.url ? 'border-red-500' : ''
                            }`}
                            placeholder="https://example.com/song"
                        />
                        {errors.url && (
                            <p className="mt-1 text-xs italic text-red-500">
                                {errors.url}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block mb-2 text-sm font-bold text-gray-700"
                        >
                            Title *
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                errors.title ? 'border-red-500' : ''
                            }`}
                            placeholder="Song title"
                        />
                        {errors.title && (
                            <p className="mt-1 text-xs italic text-red-500">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="artist"
                            className="block mb-2 text-sm font-bold text-gray-700"
                        >
                            Artist
                        </label>
                        <input
                            type="text"
                            id="artist"
                            name="artist"
                            value={data.artist}
                            onChange={handleChange}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                errors.artist ? 'border-red-500' : ''
                            }`}
                            placeholder="Artist name"
                        />
                        {errors.artist && (
                            <p className="mt-1 text-xs italic text-red-500">
                                {errors.artist}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="album"
                            className="block mb-2 text-sm font-bold text-gray-700"
                        >
                            Album
                        </label>
                        <input
                            type="text"
                            id="album"
                            name="album"
                            value={data.album}
                            onChange={handleChange}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                errors.album ? 'border-red-500' : ''
                            }`}
                            placeholder="Album name"
                        />
                        {errors.album && (
                            <p className="mt-1 text-xs italic text-red-500">
                                {errors.album}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="rating"
                            className="block mb-2 text-sm font-bold text-gray-700"
                        >
                            Rating (1-5)
                        </label>
                        <select
                            id="rating"
                            name="rating"
                            value={data.rating}
                            onChange={handleChange}
                            className={`shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                errors.rating ? 'border-red-500' : ''
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
                            <p className="mt-1 text-xs italic text-red-500">
                                {errors.rating}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="notes"
                            className="block mb-2 text-sm font-bold text-gray-700"
                        >
                            Notes
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={data.notes}
                            onChange={handleChange}
                            rows="4"
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                errors.notes ? 'border-red-500' : ''
                            }`}
                            placeholder="Add any notes about this song..."
                        />
                        {errors.notes && (
                            <p className="mt-1 text-xs italic text-red-500">
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
                            <span className="text-sm">Mark as favorite ❤️</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        >
                            Create Song
                        </button>
                        <Link
                            href="/songs"
                            className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
