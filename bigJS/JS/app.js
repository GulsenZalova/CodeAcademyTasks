
let result = new Number()

Number.prototype.add=function(num){
   return  this + num
}
Number.prototype.substract=function(num){
    return this-num 
 }
 Number.prototype.divide=function(num){
    return  this/num
 }
 Number.prototype.multiply=function(num){
    return  this*num
 }

console.log((10).add(5))
console.log((3).substract(5))
console.log((6).divide(5))
console.log((15).multiply(5))