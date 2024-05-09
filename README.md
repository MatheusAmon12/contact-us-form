# Formulário de Contato

Esse projeto utiliza [React](https://reactjs.org/) e [Vite](https://vitejs.dev/) para criar um formulário de contato. Para definir o formulário e suas validações foi utilizado [React Hook Form](https://react-hook-form.com/) e o [Zod](https://github.com/colinhacks/zod). A definição de estilos usada foi o [Tailwind CSS](https://tailwindcss.com/). E para criar os componentes a biblioteca [Shadcn](https://shadcn.com/) foi usada. O intuito do projeto é trabalhar apenas com o lado do cliente, então não acontece nada posteriormente ao submit do formulário.

## Como rodar na minha máquina?

- Faça um clone do repositório no [GitHub](https://github.com/MatheusAmon12/contact-us-form)
- Execute o comando `npm install` e `npm run dev`
- O seu `package.json` deve estar semelhante a este:

```json
{
  "dependencies": {
    "@hookform/resolvers": "^3.3.4",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-toast": "^1.1.5",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.378.0",
    "next-themes": "^0.3.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.51.4",
    "sonner": "^1.4.41",
    "tailwind-merge": "^2.3.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/node": "^20.12.11",
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@typescript-eslint/eslint-plugin": "^7.2.0",
    "@typescript-eslint/parser": "^7.2.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "typescript": "^5.2.2",
    "vite": "^5.2.0"
  }
} 
```
- Pronto para começar!

## Estrutura do projeto

- `public` - arquivos de imagem
- `src`
  - `App.tsx` - componente principal que renderiza o formulário
  - `components`
    - `ui` - biblioteca de componentes do Shadcn
      - `button` - componente que renderiza um botão
      - `input` - componente que renderiza um input
      - `sonner` - componente que renderiza um toast
      - `textarea` - componente que renderiza um textarea
    - `form` - componente refertente ao formulário
  - `lib` - biblioteca de funcionalidades
    - `utils.ts` - biblioteca de funcionalidades criada pelo Shadcn
    - `validationSchema.ts` - validação do formulário
  - `App.tsx` - componente principal que renderiza o formulário
  - `index.css` - arquivo CSS global do projeto
  - `main.tsx` - componente root do projeto

## Como me localizar no projeto?

- Acesse o diretório `src/App.tsx`, nele você terá acesso a todos os componentes e funções utilitárias do projeto.