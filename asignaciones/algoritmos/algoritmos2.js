function a() {
console.log('hello');
}
console.log('Dojo');
//output: Dojo

function a(){
console.log('hello');
return 15;
}
x = a();
console.log('x is', x);
/*output:
Hello
x is 15 */

function a(n){
  console.log('n is', n);
  return n+15;
 }
 x = a(3);
 console.log('x is', x);
 /*output:
n is 3
x is 18 */

function a(n) {
    console.log('n is', n);
    y = n*2;
    return y;
    }
x = a(3) + a(5);
console.log('x is', x);
/*output:
n is 3
n is 5
x is 16 */

function op(a,b) {
    c = a+b;
    console.log('c is', c);
    return c;
    }
x = op(2,3) + op(3,5);
console.log('x is', x);
/*output:
c is 5
c is 8
x is 13 */
