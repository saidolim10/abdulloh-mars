const student = JSON.parse(localStorage.getItem("user"));
const infoStudentBox = document.querySelector(".student__wrapper")
const logoutbtn = document.querySelector(".reset")
if (student) {
    infoStudentBox.innerHTML =
    `
    <h2 class = "name">${student.name}</h2>
    <p class = "p" >ID: ${student.id}</p>
    <p class = "p">Группа: ${student.group}</p>
    <p class = "p">Количество монет: ${student.coin}</p>
    <p class = "p">Текущий учитель: ${student.teacher}</p>
    <p class = "p">Здоровье: ${student.hp}</p>
    `
    logoutbtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "index.html";
    })
}
student()

