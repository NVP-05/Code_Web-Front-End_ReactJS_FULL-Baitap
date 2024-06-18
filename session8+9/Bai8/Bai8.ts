type Nameable = {
    name: string;
};

type Ageable = {
    age: number;
};

function combineObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return Object.assign({}, obj1, obj2);
}

const persons1: Nameable = { name: 'John' };
const persons2: Ageable = { age: 30 };

const combinedPerson = combineObjects(persons1, persons2);
console.log(combinedPerson);
