import axios, { type AxiosRequestConfig } from 'axios';

type Song = {
    id: number;
    title: string;
    created_at: string;
}

const config:  AxiosRequestConfig = {};

axios.post<Song>('song', {
    title: 'New Born',
})
.then(response => {});

fetch('/songs')
.then(response => response.json() as Promise<Song>)
.then((song) => {
    song.title;
});

const fetchIt = async <T>(url: string, options?: RequestInit): Promise<T> => {
    const response = await fetch(url, options);
    if(!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json() as Promise<T>;
};

fetchIt<Song[]>('/songs').then((response)=> {
    response.forEach((song) => {
        song.title;
        song.created_at;
        song.id;
    });
});
