import { Veiculo } from "./Veiculo";
import { RegistroDeAutomovel } from "./RegistroDeAutomovel";

export class Estacionamento {
    registrosAbertos: Array<RegistroDeAutomovel>;

    constructor() {
        this.registrosAbertos = [];
    }

    entrarVeiculo(veiculo: Veiculo): void {
        let novoRegistro: RegistroDeAutomovel = new RegistroDeAutomovel(veiculo);

        this.registrosAbertos.push(novoRegistro);
    }

    sairVeiculo(placa: string): void {
        let index: number = this.registrosAbertos.findIndex(reg => reg.veiculo.placa === placa);

        if (index === -1) {
            return;
        }

        let registroEncontrado: RegistroDeAutomovel = this.registrosAbertos[index];

        let valorASerPago: number = registroEncontrado.calcularValor();

        let dataEntrada: string = registroEncontrado.dataHoraEntrada.toLocaleString('pt-BR');
        let dataSaida: string;
        
        if (registroEncontrado.dataHoraSaida) {
            dataSaida = registroEncontrado.dataHoraSaida.toLocaleString('pt-BR');
        } else {
            dataSaida = 'Tempo Não Registrado';
        }

        let horasCobradas: number = valorASerPago / 5;

        alert(`
            Veículo de placa: ${placa}
            Modelo: ${registroEncontrado.veiculo.modelo}
            Entrou em: ${dataEntrada}
            Saiu em: ${dataSaida}
            ----------------------------
            Tempo Cobrado: ${horasCobradas} hora(s)
            Tempo Exato: ${registroEncontrado.tempoFormatado}
            Valor a Pagar: R$ ${valorASerPago.toFixed(2)}
        `);

        this.registrosAbertos.splice(index, 1);

    }

}