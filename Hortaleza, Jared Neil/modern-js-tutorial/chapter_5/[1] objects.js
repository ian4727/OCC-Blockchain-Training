// object literals

/* 
    objects are enclosed in curly braces
    properties must be key value pairs
*/

let user = {
    name: "crystal",
    age: 30,
    email: "crystal@thenetninja.co.uk",
    location: "berlin",
    blogs: [
        {title: 'why mac & cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 50}
    ],
    login() {
        console.log("the user logged in.");
    },
    logout() {
        console.log("the user logged out.");
    },
    logblogs() {
        /* 
            this is a context keyword
            this is currently in the user object, so it gets blogs from this object

            does not work with arrow functions because this takes the context of the invoke, not the declared function
        */
        console.log("this user has written the following blogs: ");
        this.blogs.forEach((blog) => {
            // get blog object properties
            console.log(blog.title, blog.likes);
        });
    },
};

// whole object
console.log(user);

// specific property with dot notation
console.log(user.name);

user.age = 35;
console.log(user.age);

// passing a string for the key
const key = "location";
console.log(user[key]);

// also works with square bracket notation
console.log(user["name"]);
user["name"] = "chun-li";
console.log(user["name"]);

// type of object
console.log(typeof user);

// object method
user.login();
user.logout();

// using 'this' keyword
user.logblogs();
