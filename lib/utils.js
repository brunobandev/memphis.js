"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNameSuffix = exports.stringToHex = exports.MemphisError = void 0;
const MemphisError = (error) => {
    if (error === null || error === void 0 ? void 0 : error.message) {
        error.message = error.message.replace('NatsError', 'memphis');
        error.message = error.message.replace('Nats', 'memphis');
        error.message = error.message.replace('nats', 'memphis');
    }
    if (error === null || error === void 0 ? void 0 : error.stack) {
        error.stack = error.stack.replace('NatsError', 'memphis');
        error.stack = error.stack.replace('Nats:', 'memphis');
        error.stack = error.stack.replace('nats:', 'memphis');
    }
    if (error === null || error === void 0 ? void 0 : error.name) {
        error.name = error.name.replace('NatsError', 'MemphisError');
        error.name = error.name.replace('Nats', 'MemphisError');
        error.name = error.name.replace('nats', 'MemphisError');
    }
    return error;
};
exports.MemphisError = MemphisError;
const stringToHex = (str) => {
    var hex = '';
    for (var i = 0; i < str.length; i++) {
        hex += '' + str.charCodeAt(i).toString(16);
    }
    return hex;
};
exports.stringToHex = stringToHex;
const generateNameSuffix = (additonalStr = "") => {
    return `${additonalStr}${[...Array(8)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`;
};
exports.generateNameSuffix = generateNameSuffix;
