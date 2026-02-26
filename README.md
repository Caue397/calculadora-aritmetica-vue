# Calculadora Aritmética

Aplicação de calculadora aritmética simples desenvolvida com Vue 3 e TypeScript.

## Tecnologias

| Tecnologia | Versão | Descrição |
|---|---|---|
| [Vue 3](https://vuejs.org/) | ^3.5 | Framework principal, usando `<script setup>` |
| [TypeScript](https://www.typescriptlang.org/) | ~5.9 | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2 | Estilização via classes utilitárias |
| [Vite](https://vite.dev/) | ^7.3 | Bundler e servidor de desenvolvimento |
| [Vue Router](https://router.vuejs.org/) | ^5.0 | Roteamento |

## Estrutura do projeto

```
src/
├── components/
│   ├── Input.vue       # Input numérico reutilizável com v-model
│   ├── Select.vue      # Select reutilizável com v-model
│   └── Result.vue      # Exibe o resultado da operação
├── utils/
│   └── calculator.ts   # Lógica das operações aritméticas
├── router/
│   └── index.ts        # Configuração de rotas
├── App.vue             # Componente raiz
├── main.ts             # Ponto de entrada
└── style.css           # Estilos globais
```

## Funcionalidades

- Operações: adição, subtração, multiplicação e divisão
- Resultado calculado automaticamente via `computed`
- Validação de entrada: aceita apenas dígitos numéricos
- Tratamento de divisão por zero com mensagem de erro
- Decimais limitados a 2 casas apenas quando necessário

## Como rodar

```bash
npm install
npm run dev
```

## Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção com type-check |
| `npm run preview` | Pré-visualiza o build de produção |
| `npm run type-check` | Valida os tipos TypeScript |

## Decisões técnicas

### Componentes reutilizáveis
`Input.vue` e `Select.vue` implementam o contrato de `v-model` do Vue 3 via `modelValue` (prop) e `update:modelValue` (emit), permitindo uso com `v-model` no componente pai.

### Validação de input
O `Input.vue` usa `type="text"` com `inputmode="numeric"` em vez de `type="number"`. Isso permite controle total sobre os caracteres aceitos via regex `/[^0-9]/g` no evento `input`, bloqueando letras inclusive em casos de colagem e input mobile.

### Lógica de cálculo separada
A função `calculator` em `utils/calculator.ts` é independente do Vue, facilitando testes e reuso.
