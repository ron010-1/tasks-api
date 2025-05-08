let usuarioLogadoId = null;
  let tarefaEditandoId = null;

  async function criarUsuario() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName })
    });

    const user = await response.json();
    alert(`Usuário criado com ID: ${user.id}`);
  }

  function fazerLogin() {
    const id = document.getElementById("userId").value;
    usuarioLogadoId = Number(id);  // Converte para número
    document.getElementById("taskSection").style.display = 'block';
    carregarTarefas();
  }

  async function carregarTarefas() {
    const response = await fetch("http://localhost:3000/tasks");
  
    // Verifique se a resposta foi bem-sucedida
    if (!response.ok) {
      alert('Erro ao carregar tarefas.');
      return;
    }

    const tarefas = await response.json();
    
    console.log(tarefas);  // Verifique os dados recebidos

    const minhasTarefas = tarefas.filter(t => t.userId === usuarioLogadoId); // Comparação de número
    const lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    if (minhasTarefas.length === 0) {
      lista.innerHTML = "<li>Nenhuma tarefa encontrada.</li>";
      return;
    }

    minhasTarefas.forEach(t => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${t.titulo}</strong> - ${t.tipo}<br/>
        <small>${t.descricao}</small>
        <div class="task-actions">
          <button class="edit" onclick="editarTarefa('${t.id}', '${t.titulo}', '${t.descricao}', '${t.tipo}')">Editar</button>
          <button onclick="excluirTarefa('${t.id}')">Excluir</button>
        </div>
      `;
      lista.appendChild(li);
    });
  }

  async function criarTarefa() {
    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;
    const tipo = document.getElementById("tipo").value;

    const tarefa = { titulo, descricao, tipo, userId: usuarioLogadoId };

    const url = tarefaEditandoId
      ? `http://localhost:3000/tasks/${tarefaEditandoId}`
      : "http://localhost:3000/tasks";

    const method = tarefaEditandoId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tarefa)
    });

    tarefaEditandoId = null;
    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    carregarTarefas();
  }

  function editarTarefa(id, titulo, descricao, tipo) {
    document.getElementById("titulo").value = titulo;
    document.getElementById("descricao").value = descricao;
    document.getElementById("tipo").value = tipo;
    tarefaEditandoId = id;
  }

  async function excluirTarefa(id) {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE"
    });
    carregarTarefas();
  }