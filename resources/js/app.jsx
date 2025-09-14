import { createInertiaApp } from '@inertiajs/react';
import React from 'react';
import { createRoot } from 'react-dom/client';

const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });

createInertiaApp({
    resolve: (name) => {
        const page = pages[`./Pages/${name}.jsx`];
        return page && page.default ? page.default : page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
