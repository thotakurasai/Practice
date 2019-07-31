function testingFunctionAsAParam(a,b){
    a();
    b();
}

function func1(){
    return function(){
        console.log('I am return by func1');
    }
}

function func2()
{
    console.log('I am func2');
}
testingFunctionAsAParam(func1(),func2);