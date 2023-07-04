"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const inversify_1 = require("inversify");
class Application {
    static run(module) {
        let moduleMeta = null;
        const keys = Reflect.getMetadataKeys(Reflect) || [];
        keys.forEach((key) => {
            const sections = key.split('_');
            if (sections[sections.length - 1] === module.name) {
                moduleMeta = Reflect.getMetadata(key, Reflect);
                this.load(moduleMeta);
            }
        });
        if (!moduleMeta)
            throw new Error(`${module} Not found!`);
    }
    static getBean(token) {
        return this.container.get(token);
    }
    static load(moduleMeta) {
        if (moduleMeta) {
            if (moduleMeta.providers.length)
                this.loadModule(moduleMeta.providers);
            if (moduleMeta.import.length)
                moduleMeta.import.forEach(m => this.run(m));
        }
    }
    static loadModule(module_meta) {
        this.container.load(new inversify_1.ContainerModule((bind, unbind) => {
            module_meta.forEach(mt => bind(mt.provide).to(mt.useClass).inSingletonScope());
        }));
    }
}
exports.Application = Application;
Application.container = new inversify_1.Container();
