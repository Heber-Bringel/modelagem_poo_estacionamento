import { Veiculo } from "./Veiculo";

export class RegistroDeAutomovel {
    veiculo: Veiculo;
    dataHoraEntrada: Date;
    dataHoraSaida: Date | null;
    tempoDePermanencia: number | null;
    valorASerPago: number | null;
    tempoFormatado: string | null;

    constructor(veiculo: Veiculo) {
        this.veiculo = veiculo;
        this.dataHoraEntrada = new Date();
        this.dataHoraSaida = null;
        this.tempoDePermanencia = null;
        this.valorASerPago = null;
        this.tempoFormatado = null;
    }

    marcarTempoSaida(): void {
        this.dataHoraSaida = new Date();

        if (this.dataHoraEntrada && this.dataHoraSaida) {
            let diferencaEmMilissegundos: number = this.dataHoraSaida.getTime() - this.dataHoraEntrada.getTime();

            // guarda em horas (decimal)
            this.tempoDePermanencia = diferencaEmMilissegundos / (1000 * 60 * 60);

            // também guarda em formato legível (horas e minutos)
            let horas: number = Math.floor(this.tempoDePermanencia);
            let minutos: number = Math.floor((this.tempoDePermanencia - horas) * 60);
            this.tempoFormatado = `${horas} hora(s) e ${minutos} minuto(s)`;
        }
    }

    calcularValor(): number {
        if (this.tempoDePermanencia === null) {
            this.marcarTempoSaida();
        }

        let horasCobradas: number = 0;

        if (this.tempoDePermanencia !== null) {
            // arredonda pra cima caso hora seja quebrada. ex 1h 30, vai pagar por 2 h
            horasCobradas = Math.ceil(this.tempoDePermanencia);

            // debug no console
            console.log("Tempo exato:", this.tempoFormatado);
            console.log("Horas cobradas:", horasCobradas);
        }

        if (horasCobradas === 0) {
            horasCobradas = 1; // valor fixo por 1 hora
        }

        this.valorASerPago = horasCobradas * 5;
        return this.valorASerPago;
    }

}