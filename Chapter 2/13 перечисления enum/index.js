var Season;
(function (Season) {
    Season[Season["winter"] = 0] = "winter";
    Season[Season["spring"] = 1] = "spring";
    Season[Season["summer"] = 2] = "summer";
    Season[Season["autumn"] = 3] = "autumn";
})(Season || (Season = {}));
var current = Season[2];
console.log(current);
var Seasons;
(function (Seasons) {
    Seasons["Winter"] = "\u0417\u0438\u043C\u0430";
    Seasons["Spring"] = "\u0412\u0435\u0441\u043D\u0430";
    Seasons["Summer"] = "\u041B\u0435\u0442\u043E";
    Seasons["Autumn"] = "\u041E\u0441\u0435\u043D\u044C";
})(Seasons || (Seasons = {}));
;
var currentt = Seasons.Summer;
console.log(currentt); // Лето
