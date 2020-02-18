export class ClassWithPrivateProperty {
    #privateField;
    constructor(value) {
        this.#privateField = value;
    }

    getPrivate() {
        return this.#privateField;
    }

    #somePrivateMethod() {
        return 'hippity hoppity get out of my property';
    }

    callPrivateMethod(){
        return this.#somePrivateMethod();
    }
}