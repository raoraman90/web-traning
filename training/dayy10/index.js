const h1=document.getElementById("heading")
function sumfun(a,b){
    const sum=a+b;
    console.log("----sum----",sum);
    h1.innerText+=sum;
    return sum;
}
function removeContant(){
    h1.innerText="";
}
console.log("................................................................");
const n1=5;
const n2=6;
console.log(n1);


console.log(n2);
console.log("........................................................................");
const mypromise=new Promise((resolve,reject)=> {
    setTimeout(() => {
        resolve("foo");
    },3000);

});
console.log(mypromise);
 mypromise
 .then ((value)=>{
    console.log(value);

 })
 .catch((Error)=>{
    console.log(error);
 })