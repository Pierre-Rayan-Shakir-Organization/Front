[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Pierre-Rayan-Shakir-Organization_Front&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=Pierre-Rayan-Shakir-Organization_Front)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Pierre-Rayan-Shakir-Organization_Front&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Pierre-Rayan-Shakir-Organization_Front)

[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=Pierre-Rayan-Shakir-Organization_Front&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=Pierre-Rayan-Shakir-Organization_Front)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Pierre-Rayan-Shakir-Organization_Front&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=Pierre-Rayan-Shakir-Organization_Front)

[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Pierre-Rayan-Shakir-Organization_Front&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=Pierre-Rayan-Shakir-Organization_Front)

![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)

+++
# Instructions pour l'installation et le démarrage du projet Front

## Étape 1 : Cloner et suivre les instructions du dépôt API SPRING Test

1. **Cloner le dépôt GitHub** dans le répertoire parent du projet. Utilisez la commande suivante dans votre terminal :

    ```bash
    git clone https://github.com/Pierre-Rayan-Shakir-Organization/API-SPRING-test
    ```

## Étape 2 : Installer les dépendances du projet Front

1. **Accédez à la racine du projet Front** en utilisant la commande suivante :

    ```bash
    cd <chemin-vers-le-projet-front>
    ```

2. **Installer les modules et dépendances** en exécutant la commande suivante :

    ```bash
    npm install
    ```

## Étape 3 : Démarrer l’application

1. **Lancer l'application** avec la commande suivante :

    ```bash
    npm run dev
    ```

2. **Accéder à l'application** en ouvrant votre navigateur et en vous rendant à l'adresse suivante :

    ```plaintext
    http://localhost:4000
    ```

---

+++

# Lancement du projet avec Docker & Docker Compose

FiveMusic peut aussi être lancé rapidement avec **Docker** pour éviter d’installer manuellement Node.js et ses dépendances.

## Structure du projet recommandée

Pour utiliser Docker Compose, créez un **répertoire parent** contenant :

- Le dossier du **backend** (`API-SPRING-test`)
- Le dossier du **frontend** (`Front`)
- Et le fichier `docker-compose.yml` (déplacé à la racine du dossier parent)

```
FiveMusic/
├── docker-compose.yml
├── API-SPRING-test/
└── Front/

```

## Étapes de lancement

### 1. Cloner les deux projets

```bash
git clone https://github.com/Pierre-Rayan-Shakir-Organization/API-SPRING-test
git clone https://github.com/Pierre-Rayan-Shakir-Organization/Front

```

> Assurez-vous de placer les deux dossiers dans le même dossier parent.
> 

### 2. Déplacer le fichier `docker-compose.yml`

Le fichier `docker-compose.yml` se trouve dans le dossier `API-SPRING-test` par défaut.

**Déplacez-le au même niveau que les deux projets**, comme ceci :

```bash
mv API-SPRING-test/docker-compose.yml .

```

### 3. Lancer les conteneurs

```bash
docker-compose up --build

```

### 4. Accéder à l’application

- Frontend : [http://localhost:](http://localhost:3000/)4000
- Backend API : [http://localhost:300](http://localhost:3001/)0

##

