# Site acadêmico — Paulo C. Coimbra

Site pessoal/hub, para publicar via GitHub Pages. Serve como página inicial e ponto de entrada para as páginas de curso e de extensão; o conteúdo em si (artigos, notas de aula, materiais) fica no repositório separado [`academic-archive`](https://github.com/SEU-USUARIO/academic-archive).

Duas edições visuais convivem no mesmo repositório: a **edição padrão** (`index.html`) e uma **edição em quadrinhos** (`index-quadrinhos.html`), com um link de troca entre as duas no topo de cada uma.

## Estrutura

```
site-academico/
├── index.html                          # home / hub — edição padrão, bilíngue PT/EN
├── index-quadrinhos.html               # home / hub — edição alternativa em quadrinhos
├── assets/
│   ├── style.css                       # CSS compartilhado pela edição padrão e subpáginas
│   └── site.js                         # idioma, abas e reveal-on-scroll
├── cursos/
│   └── ciencia-dados-ml-ia-economia-financas/index.html
└── extensao/
    ├── quantecon/index.html
    ├── ia-para-todos/index.html
    ├── literacia-em-investimentos/index.html
    └── formacao-de-formadores/index.html
```

A edição padrão e as páginas de curso/extensão compartilham `assets/style.css` e `assets/site.js` — editar o CSS/JS uma vez atualiza todas elas de uma vez. A edição em quadrinhos é autocontida (CSS/JS embutidos no próprio arquivo), por ser um sistema visual à parte.

## Antes de publicar

1. **Substituir `SEU-USUARIO`** por seu usuário real do GitHub em todos os arquivos (busca e substituição global):
   ```bash
   grep -rl "SEU-USUARIO" . | xargs sed -i '' 's/SEU-USUARIO/<seu-usuario-real>/g'   # macOS
   grep -rl "SEU-USUARIO" . | xargs sed -i 's/SEU-USUARIO/<seu-usuario-real>/g'       # Linux
   ```
   Isso atualiza os links para o `academic-archive` (na home e em cada subpágina) e o link de "código-fonte deste site".
2. Preencher em `index.html`, seção **Contato**: Currículo Lattes e ORCID (marcados com "substituir pelo link real"). E-mail institucional e Google Scholar já estão preenchidos.
3. Conferir os dados factuais (status de artigos, nomes de projetos) antes de publicar.
4. Se quiser adicionar uma foto, o local mais natural é ao lado do nome no hero.
5. A edição em quadrinhos (`index-quadrinhos.html`) ainda reflete uma versão anterior do conteúdo — revise-a separadamente se quiser mantê-la sincronizada com a edição padrão.

## Como publicar (GitHub Pages)

```bash
cd site-academico
git init
git add .
git commit -m "site inicial do hub acadêmico"
git branch -M main
git remote add origin git@github.com:<seu-usuario>/<seu-usuario>.github.io.git
git push -u origin main
```

Se o repositório se chamar exatamente `<seu-usuario>.github.io`, o GitHub Pages já publica automaticamente na raiz em `https://<seu-usuario>.github.io`. Se preferir outro nome de repositório, ative GitHub Pages em **Settings → Pages → Branch: main / (root)**; o site fica em `https://<seu-usuario>.github.io/<nome-do-repo>/`.

Veja também [`GUIA-PUBLICACAO.md`](GUIA-PUBLICACAO.md) para o passo a passo completo (autenticação, primeiro push, e como atualizar depois de publicado).

## Adicionando uma nova página de curso/extensão

1. Crie a pasta em `cursos/<nome>/` ou `extensao/<nome>/`
2. Copie o `index.html` de uma página existente como ponto de partida (já referencia `../../assets/style.css` e `../../assets/site.js` — mantém o mesmo sistema visual automaticamente)
3. Adicione o card correspondente na home (`index.html`, seção **Ensino** ou **Extensão**)
4. Link de volta para os materiais no `academic-archive`, se aplicável
