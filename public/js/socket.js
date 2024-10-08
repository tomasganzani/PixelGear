const socket = io();

document.querySelector("#register").addEventListener("click", () => {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const photo = document.querySelector("#photo").value;
    const user = { name, email, password, photo };
    socket.emit("register", user);
})

socket.on("register", (data) => {
    data.map(
        (user) => {
            document.querySelector("#users").innerHTML += `<li>${user.name} - ${user.email}</li>`
        }
    )
    
})