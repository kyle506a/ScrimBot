"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dateFormat = require("dateformat");
function formatDatetime(datetime) {
    var hour = dateFormat(datetime, 'UTC:HH:MM');
    var date = dateFormat(datetime, 'UTC:dS mmmm');
    return `${hour} UTC on ${date}`;
}
exports.formatDatetime = formatDatetime;
function parseArgs(argString) {
    const re = /\s*(?:("|')([^]*?)\1|(\S+))\s*/g;
    const result = [];
    let match = [];
    var argCount = argString.length;
    while (--argCount && (match = re.exec(argString))) {
        result.push(match[2] || match[3]);
    }
    if (match && re.lastIndex < argString.length) {
        const re2 = /^("|')([^]*)\1$/g;
        result.push(argString.substr(re.lastIndex).replace(re2, '$2'));
    }
    return result;
}
exports.parseArgs = parseArgs;
exports.default = parseArgs;
