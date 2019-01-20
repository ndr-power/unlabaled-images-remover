const fs = require('fs')
fs.readdir('.', (err, files) => {
    files.forEach(val => {
        if (val.indexOf('.jpg') > -1){
            file = fs.existsSync(val.replace('.jpg', '.xml'))
            if (!file) fs.unlinkSync(val) 
        }
    })
})
