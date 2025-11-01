const { jsPDF } = require("jspdf");
const fs = require('fs');



// Create a new document
const doc = new jsPDF();

// Add the custom MICR font

doc.setFontSize(10);

// Title
doc.text('Payment Check', 100, 20);

// Check Information
doc.text('Pay to the order of: John Doe', 20, 40);
doc.text('Amount: $1,000.00', 20, 50);

// Bank Information
doc.text('Bank Name: XYZ Bank', 20, 60);

// Date
doc.text('Date: 11/01/2025', 150, 60);

// Signature Line
doc.text('Signature: ____________________', 20, 80);


const fontPath = './test/micrenc.ttf';
const fontBuffer = fs.readFileSync(fontPath);
const base64Font = fontBuffer.toString('base64');

// Base64-encoded MICR font (replace with actual base64 string)
const micrFontBase64 = base64Font;

doc.addFileToVFS("MICREnc.ttf", micrFontBase64);
doc.addFont("MICREnc.ttf", "MICR", "normal");

// Set font to MICR
doc.setFont("MICR");
// Optional MICR line
doc.text('A 123456789 1234 C  56789012345', 20, 90);

// Save PDF to disk
doc.save('check_example_with_micr_font.pdf');
