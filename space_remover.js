const fs = require('fs')

fs.readdir('.', (err, files) => {
    files.forEach(val => {
        console.log(val)
        fs.readFile(val, 'utf8', (err2, data) => {
            // console.log(data)
            if (val!='index.js'){
                fs.renameSync(val, val.replace(' ', ''))
            }
            
        })
    })
})
