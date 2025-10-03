# 🅿️ Sistema de Gerenciamento de Estacionamento

Este projeto é uma implementação em **TypeScript** de um sistema básico de gerenciamento de estacionamento, desenvolvido com conceitos de **Programação Orientada a Objetos (POO)**.  

O sistema registra a entrada e saída de veículos, calcula o tempo de permanência e determina o valor a ser pago de acordo com regras simples de cobrança.

---

## 🚀 Funcionalidades

- **Registro de Veículos:** Cada veículo possui Placa, Modelo e Cor.  
- **Entrada e Saída:** O sistema registra data/hora de entrada e saída.  
- **Cálculo de Tempo:** O tempo de permanência é calculado em minutos.  
- **Regra de Cobrança:**
  - Valor fixo de **R$ 5,00 por hora ou fração**.  
  - Cobrança mínima de **R$ 5,00 (1 hora)** mesmo em permanências curtas.  
- **Relatório de Saída:** Um recibo é exibido via `alert()` mostrando:
  - Data/hora de entrada  
  - Data/hora de saída  
  - Tempo cobrado  
  - Valor total a pagar  

---

## 📂 Estrutura do Código

- **`Veiculo.ts`** → Representa modelo de um veículo (placa, modelo, cor).  
- **`RegistroDeAutomovel.ts`** → Guarda os dados da estadia (entrada, saída, cálculo de valor).  
- **`Estacionamento.ts`** → Gerencia registros, controla entrada/saída e gera o recibo.  
- **`index.ts`** → Ponto de execução. Simula o uso do sistema em tempo real.  

---
