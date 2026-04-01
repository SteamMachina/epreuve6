# VitalSync

Application web de suivi d'activités sportives. Architecture 3 tiers : frontend Nginx, backend Node.js/Express, base de données PostgreSQL. Tout est conteneurisé via Docker.

## Lancer le projet

se déplacer dans le dossier vitalsync puis lancer dans le bash : 
```bash
docker compose up --build
```

aller sur http://localhost:8080

## Choix techniques

- Multi-stage build : Le multistage permet d'avoir l'image la plus petite possible avec que les informations necessaire
- Alpine : permet d'avoir des images légères ce qui permet un deploiement plus rapide
- Nginx proxy_pass : permet de connecter le front end au back end
- Variables d'environnement : permet de cacher les variables sensibles et eviter des soucis de sécurité et confidentialités.

## Architecture

```mermaid
graph LR
    Browser -->|:8080| Frontend[Nginx]
    Frontend -->|/api/*| Backend[Node.js :3000]
    Backend --> Database[PostgreSQL :5432]
```

