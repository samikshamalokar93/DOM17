function check() {
    let x = document.getElementById("name").value;

    if (x === "") {
        document.getElementById("msg").innerHTML = "Name Required";
        document.getElementById("msg").style.color = "red";
    } else {
        document.getElementById("msg").innerHTML = "Form Submitted";
        document.getElementById("msg").style.color = "green";
    }
}