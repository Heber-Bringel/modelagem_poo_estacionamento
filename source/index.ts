
import { Veiculo } from "./Veiculo";
import { Estacionamento } from "./Estacionamento";

// --- INICIALIZAÇÃO DO SISTEMA ---
let estacionamento: Estacionamento = new Estacionamento();
let carroA: Veiculo = new Veiculo("ABC-1234", "Voyage", "Prata");
let carroB: Veiculo = new Veiculo("XYZ-5678", "Jeep Renegade", "Verde");

alert("SISTEMA DE ESTACIONAMENTO - PRONTO PARA USO");

// --- FLUXO 1: ENTRADA E SAÍDA ---

// 1. Entrada do Carro A
estacionamento.entrarVeiculo(carroA);
alert(`ENTRADA: Veículo ${carroA.modelo} de placa ${carroA.placa} registrado.`);

// 2. Saída do Carro A
estacionamento.sairVeiculo(carroA.placa);

// --- FLUXO 2: ENTRADA E SAÍDA ---

// 3. Entrada do Carro B
estacionamento.entrarVeiculo(carroB);
alert(`ENTRADA: Veículo ${carroB.modelo} de placa ${carroB.placa} registrado.`);

// 4. Saída do Carro B
estacionamento.sairVeiculo(carroB.placa);

// --- VERIFICAÇÃO FINAL ---
alert(`FIM DO TESTE. Registros ativos no estacionamento: ${estacionamento.registrosAbertos.length}`);