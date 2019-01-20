const fs = require('fs')
fs.readdir('.', (err, files) => {
    files.forEach(val => {
        if (val.indexOf('.xml') > -1) 
            fs.renameSync(val , __dirname + '/annotiations/' + val); 
    })
})
