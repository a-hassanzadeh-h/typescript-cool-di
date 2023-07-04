"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Metadata_1 = require("../constants/Metadata");
function Module(config) {
    return function (ctr) {
        Reflect.defineMetadata(Metadata_1.METADATA.key.concat('_').concat(ctr.name), config, Reflect);
    };
}
exports.default = Module;
