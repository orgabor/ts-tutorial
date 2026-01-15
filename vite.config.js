import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { run } from 'vite-plugin-run';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        tailwindcss(),
        react(),
        run([{
            name: 'TypeScript Transform',
            desc: 'Transform TypeScript files',
            run: ['php', 'artisan', 'typescript:transform'],
            pattern: ['app/**/*Data.php', 'app/**/Enums/*.php']
        }])
    ],
});
