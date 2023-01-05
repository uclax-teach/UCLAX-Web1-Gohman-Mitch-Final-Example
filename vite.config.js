import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        plugins: [svgr(), react()],
        server: {
            port: 3010,
        },
        resolve: {
            alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
        },
        build: {
            outDir: './build',
        },
        base: '/Uclax-Gohman-Mitch-Final-Example/',
    };
});
