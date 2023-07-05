import 'reflect-metadata';
import { METADATA } from "../constants/Metadata";
export default function Module(config) {
    return function (ctr) {
        Reflect.defineMetadata(METADATA.key.concat('_').concat(ctr.name), config, Reflect);
    };
}
