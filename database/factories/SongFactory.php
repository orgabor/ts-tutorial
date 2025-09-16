<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Song>
 */
class SongFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'url' => $this->faker->url(),
            'title' => $this->faker->words(3, true),
            'artist' => $this->faker->optional()->name(),
            'album' => $this->faker->optional()->words(2, true),
            'notes' => $this->faker->optional()->paragraph(),
            'rating' => $this->faker->optional()->numberBetween(1, 5),
            'favorite' => $this->faker->boolean(20), // 20% chance of being favorite
        ];
    }
}
