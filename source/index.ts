
import { Veiculo } from "./Veiculo";
import { Estacionamento } from "./Estacionamento";

// --- INICIALIZAÇÃO DO SISTEMA ---
let estacionamento: Estacionamento = new Estacionamento();
let carroA: Veiculo = new Veiculo("ABC-1234", "Voyage", "Prata");
let carroB: Veiculo = new Veiculo("XYZ-5678", "Jeep Renegade", "Verde");

alert("SISTEMA DE ESTACIONAMENTO - PRONTO PARA USO");

// --- FLUXO 1: ENTRADA E SAÍDA IMEDIATA (Teste da cobrança mínima de 1h) ---

// 1. Entrada do Carro A
estacionamento.entrarVeiculo(carroA);
alert(`ENTRADA: Carro ${carroA.placa} registrado.`);

// 2. Saída do Carro At
estacionamento.sairVeiculo(carroA.placa);

// --- FLUXO 2: ENTRADA E SAÍDA COM ESPERA (Teste de múltiplas horas) ---

// 3. Entrada do Carro B
estacionamento.entrarVeiculo(carroB);
alert(`ENTRADA: Carro ${carroB.placa} registrado. Espere 60 segundos antes do próximo passo para testar a cobrança de 2h.`);

// **NOTA:** Para testar a cobrança de 2 horas (R$ 10,00), você precisará esperar mais de 60 segundos na tela de alerta antes de clicar em OK no próximo passo.

// 4. Saída do Carro B
estacionamento.sairVeiculo(carroB.placa);

// --- VERIFICAÇÃO FINAL ---
alert(`FIM DO TESTE. Registros ativos no estacionamento: ${estacionamento.registrosAbertos.length}`);