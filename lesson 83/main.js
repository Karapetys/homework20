const user = {
    name: 'Artyom',
    age: 23,
    sex: 'male',
    sayHello: function(name) {
        console.log(`Hello ${name}`);
    }
};

user.sayHello('Tom');
user.sayHello('Alice');






const users = [
    {
        name: 'Artyom1',
        age: 23,
        sex: 'male',
        role: 'user'
    },
    {
        name: 'Alice',
        age: 28,
        sex: 'female',
        role: 'admin'
    },
    {
        name: 'John',
        age: 30,
        sex: 'male',
        role: 'user'
    },
    {
        name: 'Kate',
        age: 25,
        sex: 'female',
        role: 'admin'
    },
    {
        name: 'Michael',
        age: 35,
        sex: 'male',
        role: 'user'
    }
];

let commonUsers = 0

for(let i = 0; i < users.length; i++) {
    if(users[i].role === 'user'){
        commonUsers += 1
    }
        
    
}
console.log(commonUsers)