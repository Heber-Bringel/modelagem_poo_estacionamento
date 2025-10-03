export class Veiculo {
    placa: string;
    modelo: string;
    cor: string;

    constructor(p: string, m: string, c: string) {
        this.placa = p;
        this.modelo = m;
        this.cor = c;
    }
}