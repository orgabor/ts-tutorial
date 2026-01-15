<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { useEcho } from '@laravel/echo-vue';
import { useJsonStream } from '@laravel/stream-vue';
import type { Nullable, SongAddedData, SongJsonStreamData, SongModel } from '../../types.js';

type EditProps = {
    song: Omit<SongModel, 'created_at' | 'updated_at'> & // opposite of picking
    // picking suff Pick<SongModel, 'id' |'album' | 'artist' | 'notes' | 'rating' | 'favorite'> &
    Required<Pick<SongModel, | 'tags'>>;

};

type UpdateFormData = Pick<SongModel, 'url' | 'title'>
    & Partial<Nullable<Pick<SongModel, 'artist' | 'album' | 'notes' | 'rating' | 'favorite'>>>
    & {
        playlist: 'chill' | 'workout' | 'party';
    };

const props = defineProps<EditProps>();

const { put } = useForm({
    url: props.song.url,
    title: props.song.title,
    artist: props.song.artist,
    album: props.song.album,
    notes: props.song.notes,
    rating: props.song.rating,
    favorite: props.song.favorite,
    playlist: 'chill',
});

const handleSubmit = () => {
    put(`/songs/${props.song.id}`);
};

useEcho<SongAddedData>('songs', 'SongAdded', (e) => {
    console.log(e.song.url);
});

const streamResult = useJsonStream<SongJsonStreamData>('/songs.json');
</script>

<template>
    <div>
        <form @submit.prevent="handleSubmit"></form>
    </div>
</template>
