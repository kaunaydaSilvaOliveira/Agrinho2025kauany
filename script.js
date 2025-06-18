// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    // Obtém o botão "Descubra Mais Dicas" pelo seu ID
    const btnSaibaMais = document.getElementById('btnSaibaMais');

    // Verifica se o botão existe antes de adicionar o evento de clique
    if (btnSaibaMais) {
        // Adiciona um 'event listener' para o clique no botão
        btnSaibaMais.addEventListener('click', function() {
            // Exibe uma mensagem de alerta simples quando o botão é clicado
            // Em uma aplicação real, você poderia rolar para outra seção,
            // abrir um modal ou carregar mais conteúdo.
            alert('Excelente! Em breve, teremos mais recursos e dicas detalhadas aqui. Por enquanto, continue explorando as seções acima!');
        });
    }
});
