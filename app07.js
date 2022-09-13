var x= 1+2;
console.log(x);

var y="hello"+"world";
console.log(y);

var z=1+"2";
console.log(z);

var p=1;
q="4";
console.log(p+q);

//coercion demo
 var flag =1<2<3;
 console.log(flag);

 var flag2=3<2<1;
 console.log(flag2);


 var a;
 a='hi';
 if(a){
    console.log('variable a has something');
 }else{
    console.log('variable a has nothing');
 }

 //Loose equality - cooerction
 if('3'==3){
    console.log('yes');
 }else{
    console.log('no');
 }


 //strict equality - no coercion
 if('3'===3){
    console.log('yes');
 }else{
    console.log('no');
 }