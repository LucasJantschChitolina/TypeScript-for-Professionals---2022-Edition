// Here we have a simple typescript class with the property, a constructor and the method,

class Animal10 {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}