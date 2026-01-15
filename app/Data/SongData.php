<?php

namespace App\Data;

use Carbon\Carbon;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class SongData extends Data {
    public function __construct(
        public int $id,
        public string $url,
        public string $title,
        public string $artist,
        public string $album,
        public string $notes,
        public int $rating,
        public bool $favorite,
        public Carbon $created_at,
        public Carbon $updated_at,

    ) {}
}
