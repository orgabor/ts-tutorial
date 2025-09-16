<?php

namespace App\Http\Controllers;

use App\Events\SongAdded;
use App\Http\Requests\SongRequest;
use App\Models\Song;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class SongController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Songs/Index', [
            'songs' => Song::query()
                ->latest()
                ->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Songs/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SongRequest $request): RedirectResponse
    {
        $song = Song::create($request->validated());

        // Broadcast the SongAdded event
        broadcast(new SongAdded($song));

        return redirect()->route('songs.index')
            ->with('success', 'Song created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Song $song): Response
    {
        return Inertia::render('Songs/Show', [
            'song' => $song,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Song $song): Response
    {
        return Inertia::render('Songs/Edit', [
            'song' => $song,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SongRequest $request, Song $song): RedirectResponse
    {
        $song->update($request->validated());

        return redirect()->route('songs.index')
            ->with('success', 'Song updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Song $song): RedirectResponse
    {
        $song->delete();

        return redirect()->route('songs.index')
            ->with('success', 'Song deleted successfully.');
    }
}
