$(document).ready(function() {
    // Substitua a URL abaixo pela API do GitHub que fornece as informações desejadas
    var githubApiUrl = 'https://github.com/mysmts/curso-frontend';

    // Realiza a solicitação AJAX para obter dados do GitHub
    $.ajax({
        url: githubApiUrl,
        dataType: 'json',
        success: function(data) {
            // Atualiza os contadores com os dados obtidos
            $('#reposCount').text(data.public_repos);
            $('#followersCount').text(data.followers);
            $('#followingCount').text(data.following);
        },
        error: function(error) {
            console.log('Erro ao carregar dados do GitHub:', error);
            $('#reposCount').text('Erro ao carregar dados');
            $('#followersCount').text('Erro ao carregar dados');
            $('#followingCount').text('Erro ao carregar dados');
        }
    });
});
