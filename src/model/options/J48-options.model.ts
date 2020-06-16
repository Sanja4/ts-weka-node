export class J48Options {
    U?: boolean = false;
    M?: number = 2;
    C?: number = 0.25;

    constructor(params?: J48Options) {
        Object.assign(this, params);
    }
}
