const countFilledValues = (object1: object): number => {
    let count:number = 0;

    for (const key in object1) {
        const value = (object1 as any)[key];
        if (value !== null && value !== undefined && value !== "") {
            count += 1;
        }
    }

    return count;
};

const pet = {
    type: 'Собака',
    name: 'Шарик',
    age: 7,
    breed: '',
    vaccination: undefined,
    owner: 'Джон',
};

console.log(`Заполнено ${countFilledValues(pet)} пункта`);