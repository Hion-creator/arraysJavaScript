//forma de recorrer un array tradicional

const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.length; index++){
    const element = letters[index];
    console.log(`for ${element}`);
}

//forma abreviada con metodos de arrays

letters.forEach(item => console.log(`forEach ${item}`));

