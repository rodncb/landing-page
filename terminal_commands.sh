# Inicializar repositório Git local
git init

# Adicionar todos os arquivos respeitando o .gitignore
git add .

# Criar o primeiro commit
git commit -m "Initial commit"

# Adicionar o repositório remoto (substitua USER pelo seu username e REPO pelo nome do repositório)
git remote add origin https://github.com/USER/REPO.git

# Enviar o código para o GitHub
git push -u origin main