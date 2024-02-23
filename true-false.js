// const x="0" //(+ve ,-ve will be truthy Zero is falsy), String is also truthy except empty string,'0' is truthy but 0 is false because in a quote this is a string
let x;
if(x){
    console.log('X is truthy')
}else{
    console.log('X is falsy')
} 

//Undefined is a falsy value
//Empty object is a truthy value 
//Empty array is a truthy value

if(!x){
    console.log('X is falsy')
}
else{
    console.log('X is truthy')
}