// main.js
document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data: {
            atividades: [],
            mediaFinal: '---',
            resultadoFinal: '---',
            nomeAtividade: '',
            notaAtividade: ''
        },
        methods: {
            adicionarAtividade: function () {
                this.atividades.push({
                    nome: this.nomeAtividade,
                    nota: parseFloat(this.notaAtividade)
                });

                this.calcularMediaFinal();
            },
            calcularMediaFinal: function () {
                const notas = this.atividades.map(atividade => atividade.nota);
                const media = notas.length > 0 ? notas.reduce((acc, nota) => acc + nota, 0) / notas.length : 0;

                this.mediaFinal = media.toFixed(2);
                this.resultadoFinal = media >= 7 ? 'Aprovado' : 'Reprovado';
            }
        }
    });
});
