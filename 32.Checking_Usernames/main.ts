//Assignment No :- 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users:string[] = ["Mairaj","Rehan","Sartaj","Sardar","Pervaiz","Hamza","Manahil","rohan"];

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users:string[] = ["huzaifa","REHAN","sarib","usman","manahil","hamza"];

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
let currentUsersLowercase = [];
let newUsersLowercase = [];
for (let i = 0; i < current_users.length; i++) {
    currentUsersLowercase.push(current_users[i].toLowerCase());
    
};
for (let i = 0; i < new_users.length; i++) {
    newUsersLowercase.push(new_users[i].toLowerCase());

};

for (let i = 0; i < newUsersLowercase.length; i++) {
    if (currentUsersLowercase.includes(newUsersLowercase[i]) ) {
        console.log(`The Username "${new_users[i]}" is already Taken!.You need to enter a new Username`); 
    
    }
    else{
        console.log(`The Username "${new_users[i]}" is available!`);
        

    };
    
};
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.