# Site acadêmico — Paulo C. Coimbra

Site pessoal/hub, para publicar via GitHub Pages. Serve como página inicial e ponto de entrada para as páginas de curso e de extensão; o conteúdo em si (artigos, notas de aula, materiais) fica no repositório separado [`academic-archive`](https://github.com/SEU-USUARIO/academic-archive).

Duas edições visuais convivem no mesmo repositório, **cada uma com todas as páginas** (home + curso + extensão): a **edição padrão** e a **edição terminal/Matrix** (com efeito de chuva digital em `<canvas>`). Cada página tem um link "trocar de edição" no topo para ir e voltar entre as duas versões da mesma página.

## Estrutura

```
site-academico/
├── index.html                                          # home — edição padrão
├── index-matrix.html                                   # home — edição Matrix
├── assets/
│   ├── style.css / site.js                              # compartilhado pela edição padrão (home + subpáginas)
│   └── matrix-style.css / matrix-site.js                 # compartilhado pela edição Matrix (home + subpáginas)
├── cursos/
│   └── ciencia-dados-ml-ia-economia-financas/
│       ├── index.html                                    # edição padrão
│       └── index-matrix.html                              # edição Matrix
└── extensao/
    ├── quantecon/{index.html, index-matrix.html}
    ├── ia-para-todos/{index.html, index-matrix.html}
    ├── literacia-em-investimentos/{index.html, index-matrix.html}
    └── formacao-de-formadores/{index.html, index-matrix.html}
```

Ambas as edições são multi-arquivo com CSS/JS compartilhados — editar `assets/style.css` atualiza a edição padrão inteira (home + 5 subpáginas) de uma vez, e o mesmo vale para `assets/matrix-style.css` na edição Matrix. Nenhuma delas é mais um arquivo autocontido.

## Antes de publicar

1. **Substituir `SEU-USUARIO`** por seu usuário real do GitHub em todos os arquivos (busca e substituição global):
   ```bash
   grep -rl "SEU-USUARIO" . | xargs sed -i '' 's/SEU-USUARIO/<seu-usuario-real>/g'   # macOS
   grep -rl "SEU-USUARIO" . | xargs sed -i 's/SEU-USUARIO/<seu-usuario-real>/g'       # Linux
   ```
   Isso atualiza os links para o `academic-archive` (nas duas edições, home e subpáginas) e o link de "código-fonte deste site".
2. Preencher em `index.html` e `index-matrix.html`, seção **Contato**: Currículo Lattes e ORCID (marcados com "substituir pelo link real"). E-mail institucional e Google Scholar já estão preenchidos.
3. Conferir os dados factuais (status de artigos, nomes de projetos) antes de publicar.
4. Se quiser adicionar uma foto, o local mais natural é ao lado do nome no hero da edição padrão.
5. Se o conteúdo textual mudar no futuro (nova disciplina, novo projeto, novo artigo), replique a mudança nas duas edições — elas não compartilham conteúdo entre si, só cada uma internamente compartilha CSS/JS entre suas próprias páginas.

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
2. Copie o `index.html` de uma página existente (edição padrão) e o `index-matrix.html` de uma página existente (edição Matrix) como ponto de partida — ambos já referenciam `../../assets/...` corretamente
3. Adicione o card correspondente nas duas homes (`index.html` e `index-matrix.html`, seção **Ensino** ou **Extensão**)
4. Link de volta para os materiais no `academic-archive`, se aplicável, nas duas edições
