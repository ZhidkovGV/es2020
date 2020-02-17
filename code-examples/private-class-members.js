export class ClassWithPrivateProperty {
    #privateField;
    constructor(value) {
        this.#privateField = value;
    }

    getPrivate() {
        return this.#privateField;
    }
}