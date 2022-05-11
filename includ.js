// let text = "Hello World, welcome to the universe.";
// let result = text.includes("world", 12);
// console.log(result)

// 2
// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("welcome");
// console.log(result)

name=["s","m","s","m","t"]
count=0
for(var i in name){
    if(name[i].includes("s","m","s","m","t")){
        count+=1
    i=i+1
    }
    
}
console.log("s",count)
console.log("m",count)
console.log("t",count)