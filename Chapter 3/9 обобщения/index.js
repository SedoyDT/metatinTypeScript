function compareName(obj1, obj2) {
    if (obj1.name == obj2.name) {
        console.log("Имена совпадают");
    }
    else {
        console.log("Имена различаются");
    }
}
var tom = { name: "Tom" };
var sam = { name: "Sam" };
compareName(tom, sam);
