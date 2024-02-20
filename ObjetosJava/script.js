// Classe abstrata Veiculo
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // Método abstrato que deve ser implementado pelas classes filhas
    acelerar() {
        throw new Error('Método acelerar deve ser implementado');
    }

    // Método abstrato que deve ser implementado pelas classes filhas
    parar() {
        throw new Error('Método parar deve ser implementado');
    }
}

// Classe Carro que herda de Veiculo
class Carro extends Veiculo {
    constructor(marca, modelo, cor) {
        super(marca, modelo);
        this.cor = cor;
        this.velocidade = 0;
    }

    acelerar() {
        this.velocidade += 10;
        console.log(`O carro ${this.marca} ${this.modelo} está acelerando. Velocidade: ${this.velocidade} km/h`);
    }

    parar() {
        this.velocidade = 0;
        console.log(`O carro ${this.marca} ${this.modelo} parou.`);
    }
}

// Classe Bicicleta que herda de Veiculo
class Bicicleta extends Veiculo {
    constructor(marca, modelo, tipo) {
        super(marca, modelo);
        this.tipo = tipo;
        this.velocidade = 0;
    }

    acelerar() {
        this.velocidade += 5;
        console.log(`A bicicleta ${this.marca} ${this.modelo} está acelerando. Velocidade: ${this.velocidade} km/h`);
    }

    parar() {
        this.velocidade = 0;
        console.log(`A bicicleta ${this.marca} ${this.modelo} parou.`);
    }
}

// Criando instâncias de objetos
const carro1 = new Carro('Toyota', 'Corolla', 'Prata');
const bicicleta1 = new Bicicleta('Caloi', 'Elite', 'Mountain Bike');
const carro2 = new Carro('Ford', 'Fusion', 'Preto');

// Interagindo com os objetos
carro1.acelerar();
bicicleta1.acelerar();
carro2.acelerar();