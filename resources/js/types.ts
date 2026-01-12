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
