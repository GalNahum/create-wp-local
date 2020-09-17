#!/usr/bin/env node
'use strict';
const open = require('open');
const cwa = require('../tasks/cwa');

const app_name = process.argv.slice(2)[0];
const cwd_dir = process.cwd();

const wait = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve() , 3000);
    })
};

cwa(app_name,  cwd_dir)
    .then( async status => {
        console.log( status.message );
        await open(status.url);
        await wait(); // Wait 3 seconds to allow the system open the default browser
        process.exit(0);
    })
    .catch( err => {
        console.error(err);
        process.exit(1);
    });











