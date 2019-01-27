const fs = require('fs')

fs.readdir('.', (err, files) => {
    files.forEach(val => {
        if (val!='index.js' && val.indexOf('xml' > -1)){
            console.log(val.replace('.xml', ''))
        }
    })
})
