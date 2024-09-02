const juan = {
    name: "Juanito",
    age: 18,
    aprovedCourses: ["Curso 1"],
    addCourse(newCours) {
        this.aprovedCourses.push(newCours);
    }
}

console.log(Object.keys(juan))
console.log(Object.getOwnPropertyNames(juan))
console.log(Object.entries(juan))

console.log(Object.getOwnPropertyDescriptors(juan));
console.log(Object.defineProperties(juan, "pruebaNasa", {
    value: "extraterrestres",
    enumerable: true,
    writable: true,
    configurable: true,
}));
