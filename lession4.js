// Methode
let Fruit = ['Apple',"Banana","oranges"];
/*console.log(...Fruit);
// Loop
for(i=0;i<Fruit.length;i++){
	console.log(Fruit[i]);
}
i=0;
while(i<Fruit.length){
	console.log(Fruit[i]);
	i++;
}
i=0;
do{
	console.log(Fruit[i]);
	i++;
}while(i>Fruit.length); */

// for in
for(index in Fruit){
	//console.log(Fruit[index]); // loop by index
}
// for of
for(key of Fruit){
//	console.log(key); // loop by key of Array item
}
// methode map
//console.log(Fruit.map((e)=>e));
// return boolean
// let result = Fruit.some((e)=> e=="Jojo");
// console.log(result);
// methode filter
//console.log(Fruit.filter((e)=>e));
Fruit.forEach((e)=>console.log(e));



