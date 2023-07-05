import { Container, ContainerModule } from "inversify";
export class Application {
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
        this.container.load(new ContainerModule((bind, unbind) => {
            module_meta.forEach(mt => bind(mt.provide).to(mt.useClass).inSingletonScope());
        }));
    }
}
Application.container = new Container();
