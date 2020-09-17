const fs = require('fs-extra');
const path = require('path');
const wpinstaller = require('wpinstaller');
const { is_empty_dir } = require('../lib/utils');

module.exports = async ( app_name, cwd_dir ) => {
    if( !app_name ) {
        throw 'You must specify an installation path';
    }

    const app_directory = path.resolve( cwd_dir, app_name );

    // Ensures that the directory exists. If the directory structure does not exist, it is created.
    await fs.ensureDir( app_directory );

    // Check if the directory is en empty one
    await is_empty_dir( app_directory );

    // Start to install WP
    return await wpinstaller( app_directory );
};