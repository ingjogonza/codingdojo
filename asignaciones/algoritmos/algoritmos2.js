/***************************Breve Lección Antes de Actividad*************************************** */
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

function op(a,b) {
    c = a+b;
    console.log('c is', c);
    return c;
}
x = op(2,3) + op(3,op(2,1)) + op(op(2,1), op(2,3));
console.log('x is', x)
/*output:
c is 5
c is 3
c is 6
c is 3
c is 5
c is 8
x is 19 */

var x = 15;
function a() {
   var x = 10;
 }
console.log(x);
a();
console.log(x);
/*output:
15
15
 */

/******************************** ACTIVIDAD************************************************/

function multiply(x,y) {
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);
/*output
2
3
undefined
 */

function multiply(x,y) {
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));
/*output:
6
10
 */

var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++) {
   i = i + 3; 
   console.log(i);
}
/*output:
3
7
*/

var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);
/*output:
15
15
10
15
 */

for(var i=0; i<15; i+=2) {
    console.log(i);
 }
 /*output:
0
2
4
6
8
10
12
14
 */

for(var i=0; i<3; i++) {
    for(var j=0; j<2; j++) {   
        console.log(i*j);
    }
 }
 /*
output:
 0
 0
 0
 1
 0
 2
*/

function looping(x,y) {
    for(var i=0; i<x; i++) {
       for(var j=0; j<x; j++) {
           console.log(i*j);
       } 
    }
 }
 z = looping(3,3);
 console.log(z);
 /*
output:
0
0
0
0
1
2
0
2
4
undefined
 */

function looping(x,y) {
    for(var i=0; i<x; i++) {
       for(var j=0; j<y; j++) {      
          console.log(i*j);
       } 
    }
    return x*y;
 }
 z = looping(3,5);
 console.log(z);
 /*
output:
0
0
0
0
0
0
1
2
3
4
0
2
4
6
8
15
*/

/****************************************PARTE 2 *******************************************************************/
/*Print 1 to x
Por favor, completa los siguientes códigos para que la función imprima (print) todos los enteros (integers) de 1 a x. Si x es negativo, haz que se muestre
 (print/log) “número negativo” y que la función devuelva falso. */

 function printUpTo(x) {
    // your code here
    if (x<0){
        console.log("false");
        return false;
    }
    else{
        for(var i=1;i<=100;i++)
        console.log(i);
    }
  }
  printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
  y = printUpTo(-10); // debería imprimir false
  console.log(y); // debería imprimir false
/*
output:
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
false
false
*/

/*
PrintSum
Completa el código de más abajo para que la función imprima enteros (integers) de 0 a x y donde cada entero imprima la suma (sum) parcial. 
Haz que la función entregue la suma final.
*/
function printSum(x) {
    var sum = 0;
    //your code here
    for (var i=0;i<256;i++){
        console.log(i);
        sum+=i;
    }
    return sum
  }
  y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
  console.log(y) // // debería imprimir 32640
/*
output:
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
32640
*/

/*PrintSumArray
Completa el código a continuación para que la función entregue la suma de todos los valores en un array dado. */

function printSumArray(x) {
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum+=x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // debería imprimir 6
/*
output:
6 
*/

/*Bonus: LargestElement
Crea una función que entregue el elemento más grande (largest element) en un array. Por ejemplo largestElement([1,30,5,7]) debiera dar como resultado 30. */

function LargestElement(x){
    var largest=x[0]
    for (var i=1;i<x.length;i++){
        if(x[i]>largest){
            largest=x[i];
        }
    }
    return largest;
}
y=LargestElement([1,30,5,7]);
console.log(y)
/*
output:
30
*/



