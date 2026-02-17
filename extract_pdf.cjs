const fs = require('fs');
const pdf = require('pdf-parse');

console.log('Type of pdf:', typeof pdf);
console.log('Keys of pdf:', Object.keys(pdf));

if (typeof pdf === 'function') {
    const dataBuffer = fs.readFileSync('SycamoreCreek_PRD_NewPages_v1.pdf');
    pdf(dataBuffer).then(function (data) {
        console.log(data.text);
    });
} else if (pdf.default && typeof pdf.default === 'function') {
    const dataBuffer = fs.readFileSync('SycamoreCreek_PRD_NewPages_v1.pdf');
    pdf.default(dataBuffer).then(function (data) {
        console.log(data.text);
    });
}
