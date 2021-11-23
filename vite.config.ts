import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import eslintPlugin from '@rollup/plugin-eslint';
import styleImport from 'vite-plugin-style-import';
import path from 'path';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';
// import pix2rem from 'postcss-pxtorem';
import pix2rem2 from 'postcss-plugin-px2rem';

function _resolve(dir: string) {
    return path.resolve(__dirname, dir);
}

export default ({ command, mode }) => {
    // https://vitejs.dev/config/
    return defineConfig({
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                },
            },
            postcss: {
                plugins: [
                    postcssImport(),
                    // pix2rem({ propList: ['*'], rootValue: 100, exclude: /node_modules/i }),
                    pix2rem2({
                        exclude: /node_modules/i,
                    }),
                    postcssPresetEnv(),
                    command === 'build' ? cssnano() : null,
                ].filter((item) => item),
            },
        },
        build: {
            manifest: true,
            // assetsInlineLimit: 200*1024,
        },
        server: {
            host: '0.0.0.0',
            port: 3001,
            open: false,
        },
        resolve: {
            alias: {
                '@': _resolve('src'),
            },
        },
        plugins: [
            { ...eslintPlugin({ include: 'src/**/*.+(js|jsx|ts|tsx|vue)' }), enforce: 'pre' },
            reactRefresh(),
            styleImport({
                libs: [
                    {
                        libraryName: 'zarm',
                        esModule: true,
                        resolveStyle: (name) => {
                            return `zarm/es/${name}/style/index`;
                        },
                    },
                ],
            }),
        ],
    });
};
