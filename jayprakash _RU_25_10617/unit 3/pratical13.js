
function scopeDemo() {
    
    var x = 10;
    if (true) {
        var x = 20; 
        console.log("Inside if block with var:", x);
    }
    console.log("Outside if block with var:", x);

    
    let y = 30;
    if (true) {
        let y = 40; 
        console.log("Inside if block with let:", y);
    }
    console.log("Outside if block with let:", y);

    
    const z = 50;
    if (true) {
        const z = 60; 
        console.log("Inside if block with const:", z);
    }
    console.log("Outside if block with const:", z);
}


scopeDemo();