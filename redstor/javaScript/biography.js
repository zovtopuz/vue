var age = calculate_age(new Date(2001, 08, 22));

document.getElementById("wievAge").onclick = function() {
    alert(age);
}

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);

}