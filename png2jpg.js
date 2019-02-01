const fs = require('fs')
const jimp = require('jimp')
fs.readdir('.', (err, files) => {
    files.forEach(val => {
        console.log(val)
        fs.readFile(val, 'utf8', (err2, data) => {
            // console.log(data)
            if (val.indexOf('.png') > -1){
                jimp.read(val, (err, img) => {
                    img.write(val.replace('.png', '.jpg'))
                })
            }
            
        })
    })
})
