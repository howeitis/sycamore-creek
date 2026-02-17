import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const pdf = require('pdf-parse');

try {
    const dataBuffer = fs.readFileSync('SycamoreCreek_PRD_NewPages_v1.pdf');
    pdf(dataBuffer).then(function (data) {
        fs.writeFileSync('prd_full.txt', data.text);
        console.log('Successfully wrote PRD text to prd_full.txt');
    }).catch(err => {
        console.error('Error parsing PDF:', err);
    });
} catch (err) {
    console.error('Error reading file:', err);
}
