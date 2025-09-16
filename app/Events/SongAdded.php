<?php

namespace App\Events;

use App\Models\Song;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class SongAdded implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public function __construct(public Song $song)
    {
        //
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('songs'),
        ];
    }

    /**
     * Get the data to broadcast.
     *
     * @return array<string, mixed>
     */
    public function broadcastWith(): array
    {
        return [
            'song' => [
                'id' => $this->song->id,
                'title' => $this->song->title,
                'artist' => $this->song->artist,
                'album' => $this->song->album,
                'url' => $this->song->url,
                'notes' => $this->song->notes,
                'rating' => $this->song->rating,
                'favorite' => $this->song->favorite,
                'created_at' => $this->song->created_at,
                'updated_at' => $this->song->updated_at,
            ],
        ];
    }

    /**
     * The event's broadcast name.
     */
    public function broadcastAs(): string
    {
        return 'song.added';
    }
}
