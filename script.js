
function scrollToSkills() {
    document.getElementById("explore").scrollIntoView({
        behavior: "smooth"
    });
}

function selectSkill(skill) {
    alert("You selected: " + skill);
}

function showLogin() {
    let name = prompt("Enter your name to login:");

    if (name && name.trim() !== "") {
        alert("Welcome to SkillSync, " + name + "!");
    }
}

document.getElementById("exchangeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let teach = document.getElementById("teach").value;
    let learn = document.getElementById("learn").value;

    document.getElementById("result").innerHTML =
        "<h3>Exchange Request Submitted!</h3>" +
        "<p>Welcome, " + name + "!</p>" +
        "<p>You can teach: " + teach + "</p>" +
        "<p>You want to learn: " + learn + "</p>";

    this.reset();
});
