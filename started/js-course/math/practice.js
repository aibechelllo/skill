/* 
Вычисляем количество квартир в доме.
Дано кол-во подъездов, этажей и квартир на одном этаже.
Нужно вывести кол-во квартир в одном подъезде и во всём
*/

// кол-во подъездов
let entrances = 4;
//qty floors
let floors = 9;
//кол-во квартир на этаже 
let flatsPerFloor = 4;

let flatsPerEntrance = floors * flatsPerFloor;
console.log("кол-во квартир в подъезде", flatsPerEntrance)

let flats = entrances * flatsPerEntrance;
console.log("кол-во квартир в доме", flats)