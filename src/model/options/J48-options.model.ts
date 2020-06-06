export class J48Options {
    U?: boolean = false;
    M?: number = 1;

    constructor(params?: J48Options) {
        Object.assign(this, params);
    }
}
