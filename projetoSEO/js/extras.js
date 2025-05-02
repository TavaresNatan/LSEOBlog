var webnars = [
    ["Como fazer uma auditoria técnica SEO: confira o guia completo!","Se você está buscando melhorar a visibilidade do seu site nos buscadores, a auditoria técnica de SEO é um passo...","https://liveseo.com.br/videos-de-seo/auditoria-tecnica-de-seo/","https://liveseo.com.br/wp-content/uploads/elementor/thumbs/auditoria-tecnica-de-seo-r3wytzulwzwqwlkiizjxezrnl2kxdwes8i20ipw6xo.webp"],
    ["Generative Engine Optimization (GEO): o que é, como surgiu e mais","Com o avanço da Inteligência Artificial (IA), novas estratégias de otimização digital estão surgindo para atender a um público cada...","https://liveseo.com.br/videos-de-seo/geo-como-otimizar-conteudo-para-mecanismos-de-ia/","https://liveseo.com.br/wp-content/uploads/elementor/thumbs/Capa-Youtube-sem-data-r2qxag70n8kep5rqiy2478huo2rczpmok6s4194duk.png"],
];



const container = document.getElementById("extra-container");

webnars.forEach(x =>{
    
container.innerHTML += `
<div class="extra-item">
<h1>${x[0]}</h1>
<h4>${x[1]}</h4>
<div style="display:flex;margin-top: 50px; justify-content:center;align-items:center;">
<a href="${x[2]}"><img alt="imagem" src="${x[3]}"/></a></br>
<a href="${x[2]}"<p style="padding-left: 20px;">Link do conteúdo</p></a>
</div>
</div>
`;

});