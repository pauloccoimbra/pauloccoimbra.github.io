# Guia: publicar e atualizar o site no GitHub

Este guia cobre três coisas: (1) preparar sua máquina, (2) subir o site pela primeira vez, (3) o fluxo do dia a dia para atualizar depois de publicado. Os mesmos passos valem para o repositório `academic-archive` — só muda o nome da pasta.

---

## 0. Pré-requisitos (só uma vez)

**Conta no GitHub** — se ainda não tem, crie em [github.com](https://github.com).

**Git instalado** — confira no terminal:
```bash
git --version
```
Se não estiver instalado: [git-scm.com/downloads](https://git-scm.com/downloads) (Windows/Mac/Linux).

**Identificação do Git** (uma vez por máquina):
```bash
git config --global user.name "Paulo C. Coimbra"
git config --global user.email "seu-email@exemplo.com"
```

**Autenticação com o GitHub** — o GitHub não aceita mais senha comum ao usar `git push`. Duas opções:

- **SSH (recomendado, configura uma vez e nunca mais pede senha):**
  ```bash
  ssh-keygen -t ed25519 -C "seu-email@exemplo.com"
  # aceite o caminho padrão, pode deixar a senha da chave em branco ou não
  cat ~/.ssh/id_ed25519.pub
  ```
  Copie a saída do `cat` e adicione em **GitHub → foto de perfil → Settings → SSH and GPG keys → New SSH key**. Depois disso, use URLs `git@github.com:usuario/repo.git`.

- **HTTPS + token** (alternativa): em **Settings → Developer settings → Personal access tokens → Generate new token**, gere um token e use-o como senha na primeira vez que o terminal pedir. URLs ficam `https://github.com/usuario/repo.git`.

O restante deste guia assume SSH, mas troque a URL do `remote add` pela HTTPS se preferir.

---

## 1. Criar o repositório no GitHub

1. No GitHub, clique em **New repository**.
2. Nome do repositório:
   - `<seu-usuario>.github.io` → publica direto em `https://<seu-usuario>.github.io` (site principal, sem subpasta na URL). **Recomendado** para o site acadêmico.
   - Qualquer outro nome (ex. `academic-archive`) → publica em `https://<seu-usuario>.github.io/<nome-do-repo>/`, ou fica só como repositório de arquivos, sem Pages.
3. Deixe **Public**, e **não** marque "Add a README" (você já tem os arquivos prontos localmente).
4. Clique em **Create repository**. O GitHub mostra uma tela com comandos — ignore, usaremos os do passo 2.

---

## 2. Subir o site pela primeira vez

Descompacte o `site-academico.zip` em uma pasta local, abra o terminal nela, e rode:

```bash
cd site-academico
git init
git add .
git commit -m "site inicial do hub acadêmico"
git branch -M main
git remote add origin git@github.com:<seu-usuario>/<seu-usuario>.github.io.git
git push -u origin main
```

Troque `<seu-usuario>` pelo seu usuário real do GitHub (nos dois lugares) — e lembre que os arquivos HTML também têm o placeholder `SEU-USUARIO` nos links para o `academic-archive`; vale substituir antes de commitar (veja o `README.md` do repositório para o comando de busca-e-substituição).

## 3. Ativar o GitHub Pages

- Se o repositório se chama exatamente `<seu-usuario>.github.io`: o Pages costuma ativar sozinho. Confira em **Settings → Pages** — deve mostrar "Your site is live at https://...".
- Se o nome for outro: vá em **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
- Leva de 30s a alguns minutos para o site ficar no ar após o primeiro push. Atualizações seguintes também levam cerca de 1 minuto para propagar.

---

## 4. Como atualizar o site depois de publicado

O fluxo do dia a dia é sempre o mesmo, para qualquer mudança (texto, novo curso, correção):

```bash
cd site-academico          # entre na pasta do repositório
git pull origin main        # só necessário se você edita de mais de um computador
# edite os arquivos (index.html, cursos/..., extensao/...)
git add .
git commit -m "mensagem descrevendo a mudança"
git push origin main
```

Dentro de 1–2 minutos a mudança aparece no ar. Não precisa repetir `git init` nem `remote add` — isso é só na primeira vez.

### Três formas de editar

1. **Localmente, com editor de código** (VS Code, etc.) + os comandos acima — melhor para mudanças grandes ou quando quer testar antes de publicar.
2. **Direto pelo site do GitHub** — abra o arquivo no repositório, clique no ícone de lápis (editar), faça a mudança, e no fim da página escolha "Commit directly to the main branch". Bom para correções pequenas e rápidas, sem precisar do terminal.
3. **GitHub Desktop** (app com interface gráfica, [desktop.github.com](https://desktop.github.com)) — se preferir não usar linha de comando no dia a dia: ele mostra visualmente o que mudou e faz commit/push com poucos cliques.

### Testar antes de subir (opcional)

Para ver o site como ficará, sem precisar publicar:
```bash
cd site-academico
python3 -m http.server 8000
```
E abra `http://localhost:8000` no navegador. `Ctrl+C` para parar o servidor.

### Adicionando uma página nova de curso/extensão

Já documentado no `README.md` do repositório: copiar uma pasta existente em `cursos/` ou `extensao/`, ajustar o conteúdo, e adicionar o card correspondente na home (`index.html` e, se quiser manter as duas em sincronia, também em `index-quadrinhos.html`).

---

## Referência rápida dos comandos

| Ação | Comando |
|---|---|
| Ver o que mudou | `git status` |
| Ver histórico | `git log --oneline` |
| Desfazer mudança não commitada num arquivo | `git checkout -- arquivo` |
| Enviar mudanças | `git add . && git commit -m "..." && git push` |
| Baixar mudanças (se editar de outro computador) | `git pull` |
