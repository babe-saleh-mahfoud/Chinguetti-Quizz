
let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_noncheck = sessionStorage.getItem("nocheck");

document.getElementById("name").innerHTML = user_name;
document.getElementById("points").innerHTML = user_points;
document.getElementById("Non").innerHTML = user_noncheck ;