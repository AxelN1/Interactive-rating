const allPoints = document.querySelectorAll(".points");

allPoints.forEach((points, i) => {
    points.onclick = function () {

        let current_points = i + 1;
        console.log(current_points);

        allPoints.forEach((points, j) => {

            if (current_points >= j + 1) {
                points.style.backgroundColor = '#fc7613';
                points.style.border = '15px solid #fc7613';
                points.style.color = '#f2f5fb';
            } else {
                points.style.backgroundColor = '#252f38';
                points.style.border = '15px solid #252f38';
                points.style.color = '#727b84';
            }
        })
        localStorage.setItem("selected", current_points);

    }
})

let selected = document.getElementById("selected");

if (localStorage.getItem("selected") != null) {
    selected.textContent = ` ${localStorage.getItem("selected")}`;
}


function thankYou() {

    window.open("thank_you.html");
}