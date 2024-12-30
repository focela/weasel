// Core imports
const copy = require('rollup-plugin-copy');
const bundleSize = require('rollup-plugin-bundle-size');

// Constants
const DIST_FOLDER = 'dist';

/**
 * Custom Rollup configuration for TSDX.
 * Adds bundle size analysis and copies declaration files to the dist folder.
 */
module.exports = {
    rollup(config) {
        // Add bundle size plugin for performance analysis
        config.plugins.push(bundleSize());

        // Add copy plugin for copying declaration files
        config.plugins.push(
            copy({
                targets: [
                    {
                        src: 'src/types.ts',
                        dest: DIST_FOLDER,
                        rename: 'index.d.ts'
                    }
                ]
            })
        );

        return config;
    }
};
