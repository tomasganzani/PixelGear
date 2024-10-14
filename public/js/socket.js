const socket = io();

document.querySelector("#register-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const user = { name, email, password };
    
    document.querySelector("#message").innerHTML = "Registering... Please wait.";
    socket.emit("register", user);
    
    socket.on("register", async () => {
        document.querySelector("#message").innerHTML = "Registration successful!";
        document.querySelector("#register-form").reset();
    });
    socket.on("error", (error) => {
        document.querySelector("#message").innerHTML = `Error: ${error}`;
    });
});

