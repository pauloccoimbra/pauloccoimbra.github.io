# Site acadêmico — Paulo C. Coimbra

Site pessoal/hub, para publicar via GitHub Pages. Serve como página inicial e ponto de entrada para as páginas de curso e de extensão; o conteúdo em si (artigos, notas de aula, materiais) fica no repositório separado [`academic-archive`](https://github.com/SEU-USUARIO/academic-archive).

## Estrutura

```
site-academico/
├── index.html                          # home / hub — site bilíngue PT/EN de 7 seções
├── cursos/
│   └── ciencia-dados-ml-ia-economia-financas/index.html
└── extensao/
    ├── quantecon/index.html
    ├── ia-para-todos/index.html
    ├── literacia-em-investimentos/index.html
    └── formacao-de-formadores/index.html
```

As páginas de curso/extensão hoje são páginas simples ("em construção"), com o mesmo sistema visual da home, que já linkam para o `academic-archive`. Substitua o conteúdo de cada uma conforme for desenvolvendo a página completa daquele curso/projeto.

## Antes de publicar

1. **Substituir `SEU-USUARIO`** por seu usuário real do GitHub em todos os arquivos (busca e substituição global):
   ```bash
   grep -rl "SEU-USUARIO" . | xargs sed -i '' 's/SEU-USUARIO/<seu-usuario-real>/g'   # macOS
   grep -rl "SEU-USUARIO" . | xargs sed -i 's/SEU-USUARIO/<seu-usuario-real>/g'       # Linux
   ```
2. Preencher em `index.html`, seção **§ VII Contato**: e-mail institucional, Lattes, ORCID (marcados com `[... — a inserir]`).
3. Conferir os dados factuais (status de artigos, nomes de projetos) — usei o que está registrado nas nossas conversas anteriores, mas vale revisão sua.
4. Se quiser adicionar uma foto, o local mais natural é ao lado do nome no hero.

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

## Adicionando uma nova página de curso/extensão

1. Crie a pasta em `cursos/<nome>/` ou `extensao/<nome>/`
2. Copie o `index.html` de uma página existente como ponto de partida (mantém o mesmo sistema visual)
3. Adicione o card correspondente na home (`index.html`, seção § III ou § IV)
4. Link de volta para os materiais no `academic-archive`, se aplicável
