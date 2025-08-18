
let botaoCompradores = document.getElementById("botao-compradores");
let botaoAdicionar = document.getElementById("botao-adicionar");

if (botaoAdicionar) 
{
    botaoAdicionar.addEventListener("click", () => 
    {
        const nome = prompt("Digite o nome do comprador:");
        const email = prompt("Digite o email do comprador:");

        // Aqui simulamos um POST
        const novoUsuario = {
            id: Math.floor(Math.random() * 10000), // ID fake
            name: nome || "Usuário Fake",
            email: email || "fake@email.com",
            role: "customer",
            avatar: "https://api.lorem.space/image/face?w=150&h=150"
        };

        // Mostra no console como se fosse resposta do servidor
        console.log("Usuário criado via POST fake:", novoUsuario);

        // Também atualiza a tabela no HTML
        const tabela = document.getElementById("compradores-lista");
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${novoUsuario.id}</td>
            <td>${novoUsuario.name}</td>
            <td>${novoUsuario.email}</td>
            <td>${novoUsuario.role}</td>
            <td><img src="${novoUsuario.avatar}" width="40" height="40" style="border-radius:50%"></td>
        `;
        tabela.appendChild(tr);

        alert(`Usuário ${novoUsuario.name} cadastrado com sucesso (POST simulado)!`);
    });
}

if (botaoCompradores) 
{
    botaoCompradores.addEventListener("click", () => 
    {
        const apiBase = "https://api.escuelajs.co/api/v1";
        const tabela = document.getElementById("compradores-lista");
        tabela.innerHTML = "<tr><td colspan='5'>Carregando...</td></tr>";

        fetch(`${apiBase}/users`)
        .then(res => res.json())
        .then(data => 
        {
            tabela.innerHTML = ""; 

            if (data.length === 0) 
            {
                tabela.innerHTML = "<tr><td colspan='5'>Nenhum comprador encontrado.</td></tr>";
                return;
            }
            data.slice(0,10).forEach(user => 
            {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td><img src="${user.avatar}" alt="avatar" width="40" height="40" style="border-radius:50%"></td>`;
                tabela.appendChild(tr);
            });
        })
        .catch(err => 
        {
            tabela.innerHTML = "<tr><td colspan='5'>Erro ao carregar compradores.</td></tr>";
            console.error(err);
        });
    });
}

function validarLogin()
{
    const formulario = document.getElementById("formulario-entrada");
    if (formulario) 
    {
        formulario.addEventListener("submit", (event) => 
        {
            event.preventDefault();
            const usuario = document.getElementById("nomeUsuario").value.trim();
            const senha = document.getElementById("senhaUsuario").value.trim();

            if (usuario === "seutiao123" && senha === "seutiao123") 
            {
                window.location.href = "paginaAdministracao.html";
            } 
            
            else 
            {
                alert("Credenciais incorretas.");
            }
        });
    }
}