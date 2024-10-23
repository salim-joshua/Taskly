"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomId = generateRandomId;
const generatedIds = new Set();
function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uniqueId = '';
    do {
        uniqueId = "";
        for (let i = 0; i < 20; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            if (i % 5 === 0 && i !== 0) {
                uniqueId += "-" + characters[randomIndex];
            }
            else {
                uniqueId += characters[randomIndex];
            }
        }
    } while (generatedIds.has(uniqueId));
    return uniqueId;
}
console.log(generateRandomId());
