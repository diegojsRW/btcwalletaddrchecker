"use strict";

const fs = require("fs");
const path = require("path");
module.exports = exports = function(cb){
        
    fs.readdir(__dirname, listParse.bind(null,cb));
};
const listParse = (cb,err,files)=>{
    if(err)
        return cb(`Couldn't read files from ${__dirname}: ${err} `);

    let algo = [];

    files
        .filter(f=>f.toLowerCase() != path.basename(__filename))
        .forEach(f=>{
            algo.push({name: f, fn: require(`./${f}`)});
        });
    cb(null, algo);
};