const loginUserSet = localStorage.setItem("loginUser", JSON.stringify({ name: "Zain", fatherName: "Anwar Saeed" }))

const loginUser = JSON.parse(localStorage.getItem("loginUser"));
console.log(loginUser, "Ye hai login user");

if (!loginUser) {
    window.location.href = "./Login/login.html"
}