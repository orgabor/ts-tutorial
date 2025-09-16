<?php

namespace App\Listeners;

use App\Events\SongAdded;
use Illuminate\Support\Facades\Log;

class LogSongAdded
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(SongAdded $event): void
    {
        Log::info('New song added', [
            'song_id' => $event->song->id,
            'title' => $event->song->title,
            'artist' => $event->song->artist,
            'added_at' => now(),
        ]);
    }
}
