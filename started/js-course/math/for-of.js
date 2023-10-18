let fruits = ['apple', 'orange', 'banana', 'mango', 'avocado'];

console.log('Today I ate: ')

for (let fruit of fruits){
    console.log(fruit);
}; 


let rate = ['Aibek', 'Kuba', 'Burul', 'Dayana']

for(let i in rate){
    console.log(`${parseInt(i) + 1} place: ${rate[i]}`)
}