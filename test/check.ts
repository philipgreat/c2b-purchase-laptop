import { jsPDF } from 'jspdf';

// Check dimensions (approximate standard business check size)
const checkWidth = 152.4; // 6 inches in mm
const checkHeight = 69.85; // 2.75 inches in mm
const margin = 5;
const fs = require('fs');
// Initialize jsPDF document (Landscape orientation, mm units, custom size)
const doc = new jsPDF({
  orientation: 'l',
  unit: 'mm',
  format: [checkWidth, checkHeight]
});

// --- 1. Draw the Check Border ---
doc.rect(0, 0, checkWidth, checkHeight);

// --- 2. Sender Information (Top Left) ---
let y = margin + 3;
doc.setFontSize(10).setFont(undefined, 'bold');
doc.text('JOHN CLAW', margin, y);
y += 4;
doc.setFontSize(8).setFont(undefined, 'normal');
doc.text('A.B. BOX 123', margin, y);
y += 3;
doc.text('LOREM SPRING, 123456', margin, y);

// --- 3. Check Number and Date (Top Right) ---
doc.setFontSize(10).setFont(undefined, 'bold');
doc.text('No. 8741', checkWidth - margin - 5, margin + 3, { align: 'right' });

doc.setFontSize(8).setFont(undefined, 'normal');
doc.text('Date', checkWidth - 40, margin + 7);
doc.line(checkWidth - 35, margin + 7.5, checkWidth - margin, margin + 7.5);
doc.text('20__', checkWidth - margin - 1, margin + 7, { align: 'right' }); // Year line

// --- 4. Payee Line ---
y = margin + 17;
doc.setFontSize(5);
doc.text('PAY TO THE', margin, y-3);
doc.text('ORDER OF', margin, y);

doc.setFontSize(10);

doc.text('$', checkWidth - 45, y ); // Dollar sign
doc.line(margin + 10, y + 0.5, checkWidth - 55, y + 0.5); // Payee Name line
//doc.line(checkWidth - 42, y + 0.5, checkWidth - margin, y + 0.5); // Amount box top
doc.rect(checkWidth - 42, y-4, checkWidth - margin - (checkWidth - 42), 5); 
// --- 5. Amount in Words Line ---
y = margin + 27;

doc.line(margin, y + 0.5, checkWidth - 25, y + 0.5); // Amount in Words line
doc.text('DOLLARS', checkWidth - margin, y, { align: 'right' });

// --- 6. Bank Information (with placeholder for image) ---
y = margin + 37;
doc.setFontSize(10).setFont(undefined, 'bold');
// Placeholder for the bank image (The blue bank icon)
// To add an image like the bank icon, you would use doc.addImage(imageData, format, x, y, width, height)
// For this example, I'll only add the text.
//  // (Triggering an image would require the actual Base64 data)
doc.text('BANK OF THE WORLD', margin + 7, y);
doc.setFontSize(8).setFont(undefined, 'italic');
doc.text('Third Planet From the Sun, Earth', margin + 7, y + 3);

// --- 7. Memo and Signature Lines ---
y = checkHeight - 15;
doc.setFontSize(10).setFont(undefined, 'normal');
doc.text('MEMO', margin, y);
doc.line(margin, y + 3, checkWidth / 2 - 5, y + 3); // Memo Line
doc.text('Signature', checkWidth - margin, y, { align: 'right' });
doc.line(checkWidth / 2 + 5, y + 3, checkWidth - margin, y + 3); // Signature Line

// --- 8. MICR Line (Bottom) ---
y = checkHeight - 5;


const fontPath = './test/micrenc.ttf';
const fontBuffer = fs.readFileSync(fontPath);
const base64Font = fontBuffer.toString('base64');

// Base64-encoded MICR font (replace with actual base64 string)
const micrFontBase64 = base64Font;

doc.addFileToVFS("MICREnc.ttf", micrFontBase64);
doc.addFont("MICREnc.ttf", "MICR", "normal");

doc.setFont('MICR'); // MICR font is often Courier
doc.setFontSize(18)
doc.text('A 123456789 A 123412314  B 8741', 20, checkHeight-3);
// Save the PDF
doc.save('check.pdf');