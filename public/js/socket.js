const socket = io();
// Formulario de registro
document.querySelector("#register-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const user = { name, email, password };
    7
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

// Formulario de añadir productos
document.getElementById('add-product-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const stock = document.getElementById('stock').value;
    const category = document.getElementById('category').value;
    const photo = document.getElementById('photo').value;
    socket.emit('addProduct', { title, price, stock, category, photo });
    this.reset();
});

socket.on("productAdded", (updatedProducts) => {
    document.querySelector("#create").textContent = "Product created!";
    console.log("Productos actualizados:", updatedProducts);
});

socket.on("error", (error) => {
    document.querySelector("#create").textContent = `Error: ${error}`;
});