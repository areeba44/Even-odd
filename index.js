import inquirer from "inquirer";
/*const answer = await inquirer.prompt([{
  message:"enter number",
  type:"number",
  name:"n1",
},

])
function result(n1:number){
if(n1 %2==0){
return console.log("the number is even")

}
else{
return console.log("the number is odd")

}
}
result(2)*/
const ans = await inquirer.prompt([{
        name: "numb1",
        message: "enter numb1",
        type: "number",
    }]);
const jawab = await inquirer.prompt([{
        name: "numb2",
        message: "enter numb2",
        type: "number",
    }]);
