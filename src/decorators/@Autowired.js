"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
function Autowired(bean) {
    return (0, inversify_1.inject)(bean);
}
exports.default = Autowired;
