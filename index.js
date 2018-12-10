"use strict";

const test = require("./tests/");

test(function(err,list){
    if(err)
        return console.log(err);

    let validWallets = require("./validWallets");
    
    list.forEach(test=>{
        console.log(`Testing ${test.name} with ${validWallets.length} addresses...`);
        let seemsInvalid = validWallets.filter(addr=>{
            let r = test.fn(""+addr);
            // if(r)
            // console.log(`require("./tests/${test.name}")("${addr}") == ${r}`);
            return !r;
        });
        console.log(`\t${seemsInvalid.length} seems invalid`);
    })
})