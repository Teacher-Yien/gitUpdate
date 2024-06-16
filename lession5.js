// obj and Class
let Object ={
	id:1001,
	Name:"Fana",
	School:"RUPP"
}
//console.log(Object.id);
class Test{
	 price;
	 total;
	 item=[];
	 constructor(price,total){
			this.price =  price;
			this.total =  total;
	 }
	 addItem(text){
		  this.item.push(text);
	 }
}
const result =  new Test("10$","200$");

result.addItem("hi")
result.addItem("apple")
//console.log(result);

let ArrayOject = [
	{id:1001,Name:"Name",Age:18,sex:"male"},
	{id:1002,Name:"Dara",Age:23,sex:"female"},
	{id:1003,Name:"james",Age:32,sex:"male"},
	{id:1004,Name:"Apple",Age:15,sex:"female"},
	{id:1005,Name:"Banan",Age:20,sex:"male"},
];
//ArrayOject.pop();  // remove last element
  ArrayOject.shift()  // remove first element
//ArrayOject.push({id:1007,Name:"Na",Age:20,sex:"male"}) // add last element
console.log( ArrayOject.map((e)=>e));
var number= [20,11,99,90,8];
const String = ['C','A','B','Z'];
function Compar(a,b){
		if(a>b){
			return 1; // 
		}else if(a<b){
			return -1;
		}else{
			return 0;
		}
}
//console.log(number.sort(Compar));
console.log(number.sort((a,b)=> a-b))
console.log(String.sort())
//console.log(number.reduce((p,c)=>p+c));


