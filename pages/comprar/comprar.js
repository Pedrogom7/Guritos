// Lista de lojas parceiras
const lojas = [
  // NOVA ESPERANÇA
  { nome: "Supermercado Alves", cidade: "Nova Esperança", endereco: "Nova Esperança, PR" },
  { nome: "Supermercado Camilo", cidade: "Nova Esperança", endereco: "Nova Esperança, PR" },
  { nome: "Supermercado Bom Dia Gazola", cidade: "Nova Esperança", endereco: "Nova Esperança, PR" },
  { nome: "Supermercado Mulati", cidade: "Nova Esperança", endereco: "Nova Esperança, PR" },
  // PARANAPOEMA
  { nome: "Supermercado Pag Pouco", cidade: "Paranapoema", endereco: "Paranapoema, PR" },
  // SANTA CRUZ DO MONTE CASTELO
  { nome: "Supermercado Sobral", cidade: "Santa Cruz do Monte Castelo", endereco: "Santa Cruz do Monte Castelo, PR" },
  { nome: "Chega Mais Supermercado", cidade: "Santa Cruz do Monte Castelo", endereco: "Santa Cruz do Monte Castelo, PR" },
  // SANTA ISABEL DO IVAÍ
  { nome: "Supermercado Irmãos Sartori", cidade: "Santa Isabel do Ivaí", endereco: "Santa Isabel do Ivaí, PR" },
  { nome: "Chega Mais Supermercado", cidade: "Santa Isabel do Ivaí", endereco: "Santa Isabel do ivaí, PR" },
  // LOANDA
  { nome: "Supermercado Irmãos Sartori", cidade: "Loanda", endereco: "Loanda, PR" },
  { nome: "Tend Tudo", cidade: "Loanda", endereco: "Loanda, PR" },
  // PARANAVAÍ
  { nome: "Super Happy", cidade: "Paranavaí", endereco: "Paranavaí, PR" },
  { nome: "Guguy Supermercado", cidade: "Paranavaí", endereco: "Paranavaí, PR" },
  { nome: "Guguy Supermercado", cidade: "Paranavaí", endereco: "Paranavaí, PR" },
  { nome: "Guguy Supermercado", cidade: "Paranavaí", endereco: "Paranavaí, PR" },
  { nome: "Gugão Supermercado", cidade: "Paranavaí", endereco: "Paranavaí, PR" },
  // MARILENA
  { nome: "Supermercado Araras", cidade: "Marilena", endereco: "Marilena, PR" },
  // TAMBOARA
  { nome: "Supermercado Biscola", cidade: "Tamboara", endereco: "Tamboara, PR" },
  // QUERÊNCIA DO NORTE
  { nome: "Supermercado Ronqui", cidade: "Querência do Norte", endereco: "Querência do Norte, PR" },
  { nome: "Supermercado Chega Mais", cidade: "Querência do Norte", endereco: "Querência do Norte, PR" },
  { nome: "Supermercado Bom Preço", cidade: "Querência do Norte", endereco: "Querência do Norte, PR" },
  // COLORADO
  { nome: "Supermercado São José", cidade: "Colorado", endereco: "Colorado, PR" },
  { nome: "Supermercado Fantucci", cidade: "Colorado", endereco: "Colorado, PR" },
  // ITAGUAJÉ
  { nome: "Supermercado Pag Pouco", cidade: "Itaguajé", endereco: "Itaguajé, PR" },
  // GUAIRAÇÁ
  { nome: "Supermercado Almeida", cidade: "Guairaçá", endereco: "Guairaçá, PR" },
  // NOVA LONDRINA
  { nome: "Gugão Atacado e Varejo", cidade: "Nova Londrina", endereco: "Nova Londrina, PR" },
  // ALTO PARANÁ
  { nome: "Supermercado Gugão", cidade: "Alto Paraná", endereco: "Alto Paraná, PR" },
  { nome: "Supermercado Alto Paraná", cidade: "Alto Paraná", endereco: "Alto Paraná, PR" },
  // PRESIDENTE CASTELO BRANCO
  { nome: "Supermercado Alves", cidade: "Presidente Castelo Branco", endereco: "Presidente Castelo Branco, PR" },
  // AMAMBAI
  { nome: "Supermercado Planalto", cidade: "Amambai", endereco: "Amambai, MS" },
  { nome: "Supermercado Manso", cidade: "Amambai", endereco: "Amambai, MS" },
  { nome: "Supermercado Ideal", cidade: "Amambai", endereco: "Amambai, MS" },
  // JUTI
  { nome: "Supermercado Santos", cidade: "Juti", endereco: "Juti, MS" },
  // ITAQUIRAÍ
  { nome: "Supermercado Principal II", cidade: "Itaquiraí", endereco: "Itaquiraí, MS" },
  { nome: "Supermercado Quevedo", cidade: "Itaquiraí", endereco: "Itaquiraí, MS" },
  { nome: "Adega Fest Conveniência", cidade: "Itaquiraí", endereco: "Itaquiraí, MS" },
  // ITAPORÃ
  { nome: "Mercearia Teixeira", cidade: "Itaporã", endereco: "Itaporã, MS" },
  { nome: "Mercado Portuga", cidade: "Itaporã", endereco: "Itaporã, MS" },
  // DEODÁPOLIS
  { nome: "Supermercado Macaúba", cidade: "Deodápolis", endereco: "Deodápolis, MS" },
  // RIO BRILHANTE
  { nome: "Hipermercado C Vale", cidade: "Rio Brilhante", endereco: "Rio Brilhante, MS" },
  // ELDORADO
  { nome: "Supermercado Marini", cidade: "Eldorado", endereco: "Eldorado, MS" },
  { nome: "Supermercado Santos", cidade: "Eldorado", endereco: "Eldorado, MS" },
  // FÁTIMA DO SUL
  { nome: "Supermercado Julifran", cidade: "Fátima do Sul", endereco: "Fátima do Sul, MS" },
  { nome: "Supermercado Marambaia", cidade: "Fátima do Sul", endereco: "Fátima do Sul, MS" },
  { nome: "Supermercado Julifran Bairro", cidade: "Fátima do Sul", endereco: "Fátima do Sul, MS" },
  // IGUATEMI
  { nome: "Supermercado Paulistano", cidade: "Iguatemi", endereco: "Iguatemi, MS" },
  { nome: "Supermercado Bonaza", cidade: "Iguatemi", endereco: "Iguatemi, MS" },
  { nome: "Supermercado Serve Bem", cidade: "Iguatemi", endereco: "Iguatemi, MS" },
  { nome: "Mercado e Toral", cidade: "Iguatemi", endereco: "Iguatemi, MS" },
  // DOURADOS
  { nome: "Supermercado Santos", cidade: "Dourados", endereco: "Dourados, MS" },
  { nome: "Supermercado Macauba", cidade: "Dourados", endereco: "Dourados, MS" },
  { nome: "Mercearia Bittencourt", cidade: "Dourados", endereco: "Dourados, MS" },
  // BATAGUASSU
  { nome: "E.B. Presentes", cidade: "Bataguassu", endereco: "Bataguassu, MS" },
  // CAARAPÓ
  { nome: "Mercearia Julian", cidade: "Caarapó", endereco: "Caarapó, MS" },
  { nome: "C Vale Supermercados", cidade: "Caarapó", endereco: "Caarapó, MS" },
  { nome: "Supermercados Tupy", cidade: "Caarapó", endereco: "Caarapó, MS" },
  // MUNDO NOVO
  { nome: "Supermercado Sol 2", cidade: "Mundo Novo", endereco: "Mundo Novo, MS" },
  { nome: "Supermercado Sol", cidade: "Mundo Novo", endereco: "Mundo Novo, MS" },
  { nome: "Supermercado Central Socoloski", cidade: "Mundo Novo", endereco: "Mundo Novo, MS" },
  { nome: "Supermercado Central", cidade: "Mundo Novo", endereco: "Mundo Novo, MS" },
  { nome: "Sergio Pereira", cidade: "Mundo Novo", endereco: "Mundo Novo, MS" },
  { nome: "L.M.G. Comercial", cidade: "Mundo Novo", endereco: "Mundo Novo, MS" },
  // SANTA RITA DO PARDO
  { nome: "Loja do Gilvan", cidade: "Santa Rita do Pardo", endereco: "Santa Rita do Pardo, MS" },
  // NOVA ANDRADINA
  { nome: "Central Max", cidade: "Nova Andradina", endereco: "Nova Andradina, MS" },
  { nome: "Supermercado União", cidade: "Nova Andradina", endereco: "Nova Andradina, MS" },
  { nome: "Paraíso Bairro", cidade: "Nova Andradina", endereco: "Nova Andradina, MS" },
  { nome: "Supermercado Paraíso", cidade: "Nova Andradina", endereco: "Nova Andradina, MS" },
  { nome: "Coopavil Agroindustria", cidade: "Nova Andradina", endereco: "Nova Andradina, MS" },
  // IVINHEMA
  { nome: "Ribeiro e Manari", cidade: "Ivinhema", endereco: "Ivinhema, MS" },
  { nome: "Mercearia Macaúba", cidade: "Ivinhema", endereco: "Ivinhema, MS" },
  // NAVIRAÍ
  { nome: "Supermercado Naviraí", cidade: "Naviraí", endereco: "Naviraí, MS" },
  { nome: "Supermercado Naviraí II", cidade: "Naviraí", endereco: "Naviraí, MS" },
  { nome: "Supermercado Cro & Cra", cidade: "Naviraí", endereco: "Naviraí, MS" },
  { nome: "Mercearia Paraíso", cidade: "Naviraí", endereco: "Naviraí, MS" },
  { nome: "Supermercado Santos", cidade: "Naviraí", endereco: "Naviraí, MS" },
  { nome: "Ivo Doces", cidade: "Naviraí", endereco: "Naviraí, MS" },
  { nome: "Frutaria Paraíso", cidade: "Naviraí", endereco: "Naviraí, MS" },
  { nome: "Hipermercado C Vale", cidade: "Naviraí", endereco: "Naviraí, MS" },
  // TACURU
  { nome: "Supermercado Paraná", cidade: "Tacuru", endereco: "Tacuru, MS" },
  { nome: "Supermercado Raldi", cidade: "Tacuru", endereco: "Tacuru, MS" },
  { nome: "Supermercado Santana", cidade: "Tacuru", endereco: "Tacuru, MS" },
  // OURO VERDE
  { nome: "Supermercado Benedito", cidade: "Ouro Verde", endereco: "Ouro Verde, SP" },
  // TEODORO SAMPAIO
  { nome: "Supermercado Paulinho", cidade: "Teodoro Sampaio", endereco: "Teodoro Sampaio, SP" },
  { nome: "Super Frangolandia", cidade: "Teodoro Sampaio", endereco: "Teodoro Sampaio, SP" },
  { nome: "Conveniência Paulista", cidade: "Teodoro Sampaio", endereco: "Teodoro Sampaio, SP" },
  { nome: "Supermercado Triunfo", cidade: "Teodoro Sampaio", endereco: "Teodoro Sampaio, SP" },
  { nome: "Schin Bar", cidade: "Teodoro Sampaio", endereco: "Teodoro Sampaio, SP" },
  { nome: "Mercadinho Ulloffo", cidade: "Teodoro Sampaio", endereco: "Teodoro Sampaio, SP" },
  // MIRANTE DO PARANAPANEMA
  { nome: "Supermercado Taniguichi", cidade: "Mirante do Paranapanema", endereco: "Mirante do Paranapanema, SP" },
  { nome: "Supermercado Bandeirante", cidade: "Mirante do Paranapanema", endereco: "Mirante do Paranapanema, SP" },
  // PRESIDENTE VENCESLAU
  { nome: "Murilo Chicale", cidade: "Presidente Venceslau", endereco: "Presidente Venceslau, SP" },
  // PRESIDENTE EPITÁCIO
  { nome: "Diego Doces", cidade: "Presidente Epitácio", endereco: "Presidente Epitácio, SP" },
  { nome: "Shopping Popular", cidade: "Presidente Epitácio", endereco: "Presidente Epitácio, SP" },
  { nome: "Lojão Variedades", cidade: "Presidente Epitácio", endereco: "Presidente Epitácio, SP" },
  // MARABÁ PAULISTA
  { nome: "Supermercado Pag Menos", cidade: "Marabá Paulista", endereco: "Marabá Paulista, SP" },
  { nome: "Supermercado Geraldo", cidade: "Marabá Paulista", endereco: "Marabá Paulista, SP" },
  // SANTO ANASTÁCIO
  { nome: "Mini Preço", cidade: "Santo Anastácio", endereco: "Santo Anastácio, SP" },
  { nome: "Brink Lar", cidade: "Santo Anastácio", endereco: "Santo Anastácio, SP" },
  // JUNQUEIRÓPOLIS
  { nome: "Brink Lar", cidade: "Junqueirópolis", endereco: "Junqueirópolis, SP" }
];

const lojasPorPagina = 5;
let lojasFiltradas = []; // Armazena lojas filtradas ou todas
let paginaAtual = 1;

// Exibe a lista de lojas paginada
function exibirLojas(lista, pagina = 1) {
  const ul = document.querySelector(".lista-locais");
  ul.innerHTML = "";

  const inicio = (pagina - 1) * lojasPorPagina;
  const fim = inicio + lojasPorPagina;
  const lojasParaExibir = lista.slice(inicio, fim);

  if (lojasParaExibir.length === 0) {
    ul.innerHTML = "<li>Nenhuma loja encontrada para essa cidade.</li>";
    renderizarPaginacao(lista, pagina); // ainda renderiza a paginação
    return;
  }

  lojasParaExibir.forEach((loja) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${loja.nome}</strong> - ${loja.endereco}`;
    ul.appendChild(li);
  });

  renderizarPaginacao(lista, pagina);
}

// Renderiza os botões de paginação
function renderizarPaginacao(lista, paginaSelecionada) {
  const paginacao = document.getElementById("paginacao");
  paginacao.innerHTML = "";

  const totalPaginas = Math.ceil(lista.length / lojasPorPagina);
  if (totalPaginas <= 1) return;

  for (let i = 1; i <= totalPaginas; i++) {
    const botao = document.createElement("button");
    botao.textContent = i;
    botao.className = (i === paginaSelecionada) ? "ativo" : "";

    botao.addEventListener("click", () => {
      paginaAtual = i;
      exibirLojas(lojasFiltradas, paginaAtual);
    });

    paginacao.appendChild(botao);
  }
}

// Filtra as lojas pela cidade
function filtrarPorCidade(event) {
  const termo = event.target.value.toLowerCase().trim();
  lojasFiltradas = lojas.filter((loja) =>
    loja.cidade.toLowerCase().includes(termo)
  );
  paginaAtual = 1;
  exibirLojas(lojasFiltradas, paginaAtual);
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  lojasFiltradas = lojas; // Inicializa com todas
  exibirLojas(lojasFiltradas, paginaAtual);

  const input = document.getElementById("buscaCidade");
  if (input) {
    input.addEventListener("input", filtrarPorCidade);
  }
});