export declare class Application {
    private static container;
    static run(module: any): void;
    static getBean<T>(token: any): T;
    private static load;
    private static loadModule;
}
