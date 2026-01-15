let FirstName: string = 'John';
let age: number = 30;
let retired: boolean = true;
// array type annotation
const friends: string[] = ['Alice', 'Bob', 'Charlie'];
// object type annotation
const job: {
    title: string;
    description: string;
} = {
    title: 'Burger Chef',
    description: 'Makes burgers',
};

const firstItem = <T>(items: T[]): T => {
    return items[0];
};

const item = firstItem([1, 2, "joe"]); // item is of type any

export type SongModel = {
    id: number;
    url: string;
    title: string;
    artist: string;
    album: string;
    notes: string;
    rating: number;
    favorite: boolean;
    created_at: string;
    updated_at: string;
    tags?: TagModel[];
};

export type TagModel = {
    label: string;
    value: string;
};

export type SongAddedData = {
    song: SongModel;
};

export type SongJsonStreamData = {
    song: SongModel;
};

export type Nullable<T> = {
    [K in keyof T]?: T[K] | null;
}
