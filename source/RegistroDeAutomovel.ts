import { Veiculo } from "./Veiculo";

export class RegistroDeautomovel {
    veiculo: Veiculo;
    dataHoraEntrada: Date;
    dataHoraSaida: Date | null;
    tempoDePermanencia: number | null;
    valorASerPago: number | null;

    constructor(veiculo: Veiculo) {
        this.veiculo = veiculo;
        this.dataHoraEntrada = new Date();
        this.dataHoraSaida = null;
        this.tempoDePermanencia = null;
        this.valorASerPago = null;
    }

    marcarTempoSaida(): void {
        this.dataHoraSaida = new Date();
        
        if (this.dataHoraEntrada && this.dataHoraSaida) {
            let diferencaEmMilissegundos = this.dataHoraSaida.getTime() - this.dataHoraEntrada.getTime();
            this.tempoDePermanencia = diferencaEmMilissegundos / 60000;
        }
    }

    calcularValor(): number {
        if (this.tempoDePermanencia === null) {
            this.marcarTempoSaida();
        }

        let horasCobradas: number = 0;

        if (this.tempoDePermanencia !== null) {
            let tempoEmHoras = this.tempoDePermanencia / 60;
            horasCobradas = Math.ceil(tempoEmHoras);
        }

        if (horasCobradas === 0) {
            horasCobradas = 1;
        }

        this.valorASerPago = horasCobradas * 5;

        return this.valorASerPago || 0;

    }
}