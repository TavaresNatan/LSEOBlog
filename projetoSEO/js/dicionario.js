const dicionario_itens = [
  [
    "Crawl Budget",
    "Quantidade de páginas que o Googlebot está disposto a rastrear em seu site em determinado período.",
  ],
  [
    "TTFB (Time to First Byte)",
    "Tempo que o navegador leva para receber o primeiro byte de resposta do servidor — importante para medir a rapidez do site.",
  ],
  [
    "LCP (Largest Contentful Paint)",
    "Tempo que o maior elemento visível (imagem ou texto) leva para carregar completamente na tela.",
  ],
  [
    "Meta Title",
    "Título da página que aparece nos resultados de busca e na aba do navegador — influencia diretamente no SEO.",
  ],
  [
    "Meta Description",
    "Descrição curta que resume o conteúdo da página nos resultados de busca — importante para taxa de cliques (CTR).",
  ],
  [
    "Canonical URL",
    "Indicação para os motores de busca de qual é a versão principal de uma página, evitando conteúdo duplicado.",
  ],
  [
    "Alt Text",
    "Texto alternativo em imagens que ajuda na acessibilidade e permite que o Google entenda o conteúdo da imagem.",
  ],
  [
    "Backlink",
    "Link de outro site apontando para o seu — considerado um dos principais fatores de ranqueamento.",
  ],
  [
    "Anchor Text",
    "Texto clicável de um link — influencia o contexto e a relevância do link para o SEO.",
  ],
  [
    "Sitemap",
    "Arquivo XML que lista todas as URLs importantes do site, ajudando bots a rastrear melhor o conteúdo.",
  ],
  [
    "Robots.txt",
    "Arquivo que orienta os motores de busca sobre quais páginas devem ou não ser rastreadas.",
  ],
  [
    "Keyword Density",
    "Proporção de vezes que uma palavra-chave aparece em relação ao total de palavras no conteúdo.",
  ],
  [
    "Structured Data",
    "Informações organizadas no código que ajudam motores de busca a entender melhor o conteúdo (como avaliações, eventos, produtos).",
  ],
  [
    "Schema Markup",
    "Tipo de Structured Data usado para criar rich snippets nos resultados de pesquisa.",
  ],
  [
    "Domain Authority (DA)",
    "Métrica criada pela Moz que estima a força de um domínio para ranquear nas buscas.",
  ],
  [
    "Page Authority (PA)",
    "Métrica da Moz que estima a capacidade de uma página individual de ranquear.",
  ],
  [
    "Internal Linking",
    "Prática de criar links entre páginas dentro do mesmo site, ajudando na distribuição de autoridade e navegação.",
  ],
  [
    "Bounce Rate",
    "Percentual de visitantes que entram em uma página e saem sem interagir — indicador de relevância e experiência.",
  ],
  [
    "Mobile-First Indexing",
    "Política do Google onde a versão mobile do site é considerada prioritária para indexação e ranqueamento.",
  ],
  [
    "Core Web Vitals",
    "Conjunto de métricas do Google que medem a experiência de usuário em três pontos principais: velocidade, interatividade e estabilidade visual.",
  ],
  [
    "Page Speed",
    "Mede a velocidade com que o conteúdo de uma página carrega. Impacta a experiência do usuário e o ranking no Google.",
  ],
  [
    "Bounce Rate",
    "Taxa de rejeição, ou seja, a porcentagem de visitantes que saem de um site após visualizar apenas uma página.",
  ],
  [
    "SERP",
    "Significa 'Search Engine Results Page', é a página exibida pelo motor de busca com os resultados de uma consulta.",
  ],
  [
    "Indexed Pages",
    "São as páginas do seu site que foram rastreadas e armazenadas no índice de um mecanismo de busca.",
  ],
  [
    "Alt Attributes",
    "Descrição textual de imagens em HTML, fundamental para acessibilidade e para os motores de busca entenderem a imagem.",
  ],
  [
    "Mobile Optimization",
    "Garantir que um site funcione de maneira eficiente e fluida em dispositivos móveis, crucial para SEO.",
  ],
  [
    "Social Signals",
    "Referências de conteúdo nas redes sociais (curtidas, compartilhamentos, etc.), que podem impactar a visibilidade e o SEO.",
  ],
  [
    "Googlebot",
    "O 'crawler' do Google, responsável por explorar e indexar as páginas da web para os resultados de busca.",
  ],
  [
    "Robots Meta Tag",
    "Tag HTML que instrui os motores de busca sobre como rastrear e indexar uma página específica (ex.: 'noindex', 'nofollow').",
  ],
  [
    "nofollow",
    "Valor da tag 'rel' que instrui os motores de busca a não seguir um link e não transferir autoridade para a página destino.",
  ],
  [
    "User Experience (UX)",
    "Refere-se à experiência geral que o usuário tem ao interagir com seu site, influenciando o SEO e o tempo de permanência.",
  ],
  [
    "Link Building",
    "Processo de adquirir backlinks de outros sites, uma das estratégias mais eficazes para aumentar a autoridade do seu site.",
  ],
  [
    "CTR (Click Through Rate)",
    "Taxa de cliques, que mede a proporção de usuários que clicam em um link em relação ao número de visualizações do link.",
  ],
  [
    "Long-Tail Keywords",
    "Palavras-chave mais específicas e menos concorridas, frequentemente com maior taxa de conversão.",
  ],
  [
    "Short-Tail Keywords",
    "Palavras-chave mais genéricas e amplas, geralmente com maior volume de busca, mas também maior concorrência.",
  ],
  [
    "SEO Audit",
    "Análise detalhada de todos os fatores de SEO de um site, com o objetivo de identificar problemas e oportunidades de melhoria.",
  ],
  [
    "Link Juice",
    "O valor ou autoridade que um link transmite de uma página para outra. Links de alta qualidade transmitem mais link juice.",
  ],
  [
    "URL Structure",
    "A maneira como as URLs são organizadas em um site, importante para SEO, pois URLs claras e legíveis são mais amigáveis.",
  ],
  [
    "SEO-Friendly Content",
    "Conteúdo otimizado para SEO, que atende a critérios de qualidade, relevância e inclusão de palavras-chave.",
  ],
  [
    "Content Management System (CMS)",
    "Sistema usado para criar, gerenciar e modificar o conteúdo de um site, como WordPress, Joomla, etc.",
  ],
  [
    "Search Intent",
    "A intenção por trás da pesquisa de um usuário, que pode ser informacional, transacional ou de navegação.",
  ],
];

var index = 0;
dicionario_itens.forEach((x) => {
  index += 1;
  add_dicionario(index, x[0], x[1]);
});

function add_dicionario(index, nome, conteudo) {
  const id_div = document.getElementById("dicionario");

  const divItem = document.createElement("div");
  divItem.classList.add("faq-item");

  const h3 = document.createElement("h3");
  h3.textContent = index + " - " + nome;

  const p = document.createElement("p");
  p.textContent = conteudo;

  divItem.appendChild(h3);
  divItem.appendChild(p);

  id_div.appendChild(divItem);
}
