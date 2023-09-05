// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30},
        { title: '10 things to make with marmite', likes: 50}
    ],
    login(){
        console.log('the user logged in.');
    },
    logout(){
        console.log('the user logged out.');
    },
    logBlogs(){
        console.log('the user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    },
};

// console.log(user);
// console.log(user.name);
// user.age = 35;
// console.log(user.age);
// console.log(user['email']);
// user['name'] = 'chun-li';
// console.log(user['name']);
// console.log(typeof user);

user.login();
user.logBlogs();

// Math Objects
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// generate random numbers
const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

