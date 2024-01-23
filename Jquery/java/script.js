$(document).ready(function(){
    var contador = 0;

    $(document).on('click', '.mostrar-detalhes', function(){
        var detalhes = $(this).closest('ul').find('.detalhes');
        detalhes.slideDown();
        $(this).attr({
            'src': './images/menos-detalhes.png',
            'class': 'ocultar-detalhes',
            'title': 'Ocultar detalhes',
            'alt': 'Ocultar detalhes'
        });
    });

    $(document).on('click', '.ocultar-detalhes', function(){
        var detalhes = $(this).closest('ul').find('.detalhes');
        detalhes.slideUp();
        $(this).attr({
            'src': './images/mais-detalhes.png',
            'class': 'mostrar-detalhes',
            'title': 'Mostrar detalhes',
            'alt': 'Mostrar detalhes'
        });
    });



    $(document).on('click', '.concluir', function(){
        var tarefa = $(this).closest('ul');
        var nomeTarefa = tarefa.find('.nome-tarefa-salva');


        if (nomeTarefa.css('text-decoration') === 'line-through'){
            Swal.fire('Tarefa já foi concluída!');
        }else{
            Swal.fire({
                titleText: 'Esta ação não poderá ser desfeita. Deseja marcar como concluída?',
                showCancelButton: true,
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não'
            }).then((result) => {
                if (result.value) {
                    nomeTarefa.css('text-decoration', 'line-through');
                    $(this).attr({
                        'src' : './images/concluido.png',
                        'class': 'concluido',
                        'title' : 'Tarefa concluída',
                        'alt' : 'Tarefa concluída'
                    });
                    Swal.fire('Tarefa concluída!');
                }else{
                    Swal.fire('Tarefa não concluída.');
                };
            });
        };
    });

    $(document).on('click', '.excluir', function(){
        var tarefa = $(this).closest('ul');
        Swal.fire({
            titleText: 'Esta ação não poderá ser desfeita. Deseja excluir a tarefa?',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                tarefa.remove();
                contador -= 1;
                if (contador === 1){
                    $('#qtdTarefas').html(`Você tem <b>${contador}</b> tarefa.`);
                }else{
                    $('#qtdTarefas').html(`Você tem <b>${contador}</b> tarefas.`);
                };
                Swal.fire('Tarefa excluída com sucesso!');
            } else {
                Swal.fire('Ação cancelada.');
            }
        });

        
        

    });

    $('#btn-salvar').click(function(){

        const nomeTarefa = $('#nome-tarefa').val();
        const inicioTarefa = new Date($('#inicio-tarefa').val()).toLocaleDateString('pt-BR', 'short');
        const fimTarefa = new Date($('#fim-tarefa').val()).toLocaleDateString('pt-BR', 'short');
        const detalhesTarefa = $('#detalhes-tarefa').val();

        const tarefasSalvas = $('#lista-tarefas');

        if (inicioTarefa > fimTarefa){
            Swal.fire('A data final deve ser maior que a data inicial.');
        }else if (!nomeTarefa || !inicioTarefa || !fimTarefa){
            Swal.fire('Nome, Data Inicial e Data final são campos obrigatórios.');
        }else{
            const novaTarefa = $(`
                <ul id="tarefa">
                    <li id="tarefa-titulo">
                        <label for="nome-tarefa">Tarefa:</label>
                        <textarea class="nome-tarefa-salva" disabled>${nomeTarefa}</textarea>
                        <img src="./images/pendente.png" class="concluir" title="Concluir tarefa" alt="Concluir tarefa">
                        <img src="./images/excluir.png" class="excluir" title="Excluir tarefa" alt="Excluir tarefa">
                        <img src="./images/mais-detalhes.png" class="mostrar-detalhes" title="Mostrar detalhes" alt="Mostrar detalhes" />
                    </li>
                    <div class="detalhes" style="display: none;">
                        <li class="tarefa-inicio-fim">
                            <label>Início:</label>
                            <textarea class="inicio-tarefa-salva" disabled>${inicioTarefa}</textarea>
                            <label>Fim:</label>
                            <textarea class="fim-tarefa-salva" disabled>${fimTarefa}</textarea>
                        </li>
                        <li>
                            <textarea class="detalhes-tarefa-salva" rows="1" disabled>${detalhesTarefa}</textarea>
                        </li>
                    </div>
                </ul>
            `);

            $(novaTarefa).appendTo(tarefasSalvas);

            $('#nome-tarefa').val('');
            $('#inicio-tarefa').val('');
            $('#fim-tarefa').val('');
            $('#detalhes-tarefa').val('');

            contador++;

            if (contador === 1){
                $('#qtdTarefas').html(`Você tem <b>${contador}</b> tarefa.`);
            }else{
                $('#qtdTarefas').html(`Você tem <b>${contador}</b> tarefas.`);
            };
        }
    });
});