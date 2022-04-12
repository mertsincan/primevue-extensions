import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

import fs from 'fs-extra';
import path from 'path';

let entries = [];

// alias entries
const ALIAS_COMPONENT_ENTRIES = {
    'primevue/button': 'primevue.button',
    'primevue/inputtext': 'primevue.inputtext',
    'primevue/chip': 'primevue.chip'
}

// dependencies
const GLOBAL_DEPENDENCIES = {
    'vue': 'Vue'
}

const GLOBAL_COMPONENT_DEPENDENCIES = {
    ...GLOBAL_DEPENDENCIES,
    ...ALIAS_COMPONENT_ENTRIES
}

// externals
const EXTERNAL = ['vue'];

const EXTERNAL_COMPONENT = [...EXTERNAL, ...(Object.keys(ALIAS_COMPONENT_ENTRIES))]

// plugins
const TERSER_PLUGIN_OPTIONS = {
    compress: {
        keep_infinity: true,
        pure_getters: true,
        reduce_funcs: false
    }
}

const POSTCSS_PLUGIN_OPTIONS = {
    sourceMap: false
}

const PLUGINS = [
    vue(),
    postcss(POSTCSS_PLUGIN_OPTIONS)
]

function addEntry(name, input, output) {
    const getEntry = (isMinify) => {
        return {
            input,
            plugins: [...PLUGINS, isMinify && terser(TERSER_PLUGIN_OPTIONS)],
            external: EXTERNAL_COMPONENT
        }
    }

    const get_CJS_ESM = (isMinify) => {
        return {
            ...getEntry(isMinify),
            output: [
                {
                    format: 'cjs',
                    file: `${output}.cjs${isMinify ? '.min' : ''}.js`,
                    exports: 'auto'
                },
                {
                    format: 'esm',
                    file: `${output}.esm${isMinify ? '.min' : ''}.js`,
                    exports: 'auto'
                }
            ]
        }
    }

    const get_IIFE = (isMinify) => {
        return {
            ...getEntry(isMinify),
            output: [
                {
                    format: 'iife',
                    name,
                    file: `${output}${isMinify ? '.min' : ''}.js`,
                    globals: GLOBAL_COMPONENT_DEPENDENCIES,
                    exports: 'auto'
                }
            ]
        }
    }

    entries.push(get_CJS_ESM());
    entries.push(get_IIFE());

    // Minify
    entries.push(get_CJS_ESM(true));
    entries.push(get_IIFE(true));
}

function addSFC() {
    fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR), { withFileTypes: true })
        .filter(dir => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR + folderName)).forEach(file => {
                let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();
                if (/\.vue$/.test(file) && (name === folderName)) {
                    const input = process.env.INPUT_DIR + folderName + '/' + file;
                    const output = process.env.OUTPUT_DIR + folderName + '/' + name;

                    addEntry('primevueExtensions.' + folderName, input, output);
                }
            });
        });
}

addSFC();

export default entries;
