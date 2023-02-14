/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const pen={
    color: "Red",
    shape: "Cylindrical",
    properties : {
        company: "cello",
        height: 20,
        width: 3
    }
}
// console.log(pen.shape);

const dibba={
    company: "londonderry",
    shape: "Cylindrical",
    dimensions: {
        height:20,
        radius: 10
    },
    contains:{
        namkeen: {
            company:"Bicano",
            status: "Empty"
        },
        Biscuit: {
            company:"Cremica",
            status: "HalfEmpty"
        }
    },
    toggleLid: function(choice){
        this.shape = choice;
    }
}

// console.log(dibba.toggleLid("circle"));
console.log(dibba.shape);
console.log(dibba);