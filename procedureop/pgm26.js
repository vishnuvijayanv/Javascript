
//fn definiton of greet fn
function greet(name,callback) {
    console.log('hai',name);
    callback()
    
}
//fn definiton of callme fn

function callme() {
    console.log('callback fn');
    
}
//fn call

greet('peter',callme)