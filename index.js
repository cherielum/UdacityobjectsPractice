
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

//Object-literal notation

var sister = {
    name: "Sarah", 
    age: 23,
    parents: [ "alice", "andy" ],
    siblings: ["julia"],
    favoriteColor: "purple",
    pets: true
  };
      
  //console log a property in 2 ways:
  var user = {
    email: "user@example.com",
    firstName: "first",
    lastName: "last"
  };

  console.log(user.email); //console.log(user["email"]);

  //Quiz 7-2 Create a breakfast object to represent the following menu item:
  //The Lumberjack - $9.95 eggs, sausage, toast, hashbrowns, pancakes

  var breakfast = {
    name: "The Lumberjack",
    price: 9.95,
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

//Quiz 7-3 
// add a printAccountSummary() method that returns the following account message:

// Welcome!
// Your balance is currently $1000 and your interest rate is 1%.

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    
    printAccountSummary: function() {
     return ("Welcome!\nYour balance is currently $"  
        + savingsAccount.balance 
        + " and your interest rate is " 
        + savingsAccount.interestRatePercent +"%.");
    }
};

console.log(savingsAccount.printAccountSummary());

//Create an object called facebookProfile. The object should have 3 properties:

// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)
// The object should also have 4 methods:

// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 1

var facebookProfile = {
    name: "Cherie",
    friends: 1000,
    messages: ["hello", "you are awesome", "goodbye"],

    postMessage: function(message) {
        facebookProfile.messages.push(message);
    },
    
    deleteMessage: function(index) {
        facebookProfile.messages.splice(index,1);
    },
    
    addFriend: function() {
        facebookProfile.friends +=1; 
    },
    
    removeFriend: function() {
        facebookProfile.friends -=1;
    }
    
    
};


