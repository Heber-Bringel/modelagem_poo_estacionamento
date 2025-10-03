import { Veiculo } from "./Veiculo";
import { RegistroDeautomovel } from "./RegistroDeAutomovel";

export class Estacionamento {
    registrosAbertos: Array<RegistroDeautomovel>;

    constructor() {
        this.registrosAbertos = [];
    }

    entrarVeiculo(veiculo: Veiculo): RegistroDeautomovel {
        let novoRegistro = new RegistroDeautomovel(veiculo);

        this.registrosAbertos.push(novoRegistro);

        return novoRegistro;
    }

    sairVeiculo(placa: string): void {
        let index = this.registrosAbertos.findIndex(reg => reg.veiculo.placa === placa);

        if (index === -1) {
            return;
        }

        let registroEncontrado: RegistroDeautomovel = this.registrosAbertos[index];

        let valorASerPago: number = registroEncontrado.calcularValor();

        let dataEntrada = registroEncontrado.dataHoraEntrada.toLocaleString('pt-BR');
        let dataSaida: string;
        
        if (registroEncontrado.dataHoraSaida) {
            dataSaida = registroEncontrado.dataHoraSaida.toLocaleString('pt-BR');
        } else {
            dataSaida = 'Tempo Não Registrado';
        }

        const horasCobradas = valorASerPago / 5;

        alert(`
            Veículo de placa ${placa}
            Entrou em: ${dataEntrada}
            Saiu em: ${dataSaida}
            ----------------------------
            Tempo Cobrado: ${horasCobradas} horas
            Valor a Pagar: R$ ${valorASerPago.toFixed(2)}
        `);

        this.registrosAbertos.splice(index, 1);


    }

}