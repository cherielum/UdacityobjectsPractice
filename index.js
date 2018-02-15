
//See if you can create the close() method. 

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // isClose: true,
    close: function(){
        if(umbrella.isOpen === false){
            return "The umbrella is still opened!";
        } else {
            umbrella.isOpen = false; 
            return "Julia's umbrella is still closed!";
        }
    }
};

console.log(umbrella.isOpen);