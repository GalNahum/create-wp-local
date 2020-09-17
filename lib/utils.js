'use strict';
const fs = require('fs-extra');

function is_empty_dir(dirname) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirname, (err, files) => {
            if (err) {
                // some sort of error
                reject(err);
            } else {
                if ( !files.length )
                    return resolve( 'Directory appears to be empty' );

                reject( `The directory ${dirname} is not empty` );
            }
        });
    });
}

exports.is_empty_dir = is_empty_dir;