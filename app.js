var name="sai kiran";
var age1=20;
var college="KLU";
var isMarried=false;

var person=
{
    name:"sai",
    age:20,
    ismarried:false
};
person.height=5.10;
person.college=prompt("enter clg");
person.friends=['sai','abhi','satwik','chai'];
for (var i=0;i<person.friends.length;i++)
{
    console.log('welcome '+person.friends[i]);  
}
function getcategory(age)
{
    var category;
    if (age>18)
{
    console.log("get DL");
}
return category;

}
category=getcategory(age1)

console.log(person.height);
console.log(category);
