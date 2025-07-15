const fs = require('fs');

fs.readFile('../demo.txt', 'utf-8', (err, data1) => {
    if (err) console.log(err) ;

    fs.readFile('../r1.txt', 'utf-8', (err, data2) => {
        if (err) console.log(err) ;

        const data3 = data1 + '\n' + data2;

        fs.writeFile('combined.txt', data3, (err) => {
            if (err)  console.log(err);
            console.log('Files combined successfully!');
        });
    });
});
