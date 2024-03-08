const course = {
    name: 'Web Programming',
    score: 75
};

const grade = {
    score: 92
};

const finalResult = Object.assign(course, grade, { teacher: 'Mts Water'})  // two arguments course and grade
const copy = Object.assign({}, finalResult)

console.log(copy);
