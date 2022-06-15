# AMAP CMS

## Stack technique

- NextJs
- Tailwind CSS
- Vercel pour l'hébergement
- Netlify Identity pour la connexion au dashboard administrateur

## Inviter de utilisateurs

- Depuis l'interface de Netlify, dans l'onglet `Identity`, cliquer sur le bouton `invite user`
- Renseigner les emails des personnes à inviter
- La personne invitée clique sur le lien reçu dans l'email
- Ajouter `admin` dans l'url, juste avant le `#invite_token`
- Finaliser l'inscription en suivant les instructions

## Développement local

1. Démarrer le serveur local Netlify CMS: `yarn server`
2. Démarrer l'application: `yarn dev`
3. L'application est disponible sur `http:localhost:3000`
4. Le dashboard administrateur est accessible via la route `/admin`

## Configuration de Netlify CMS

### Modifier la configuration du CMS

- La configuration se trouve dans le fichier `public/admin/config.src.ts`
- `public/admin/config.yml` est généré automatiquement, il n'a pas besoin d'être modifié
- Les collections peuvent être modifiées depuis le dossier `public/admin/collections`
- Voir la [https://www.netlifycms.org/docs/intro/](documentation) pour plus d'informations

### Générer les types pour les Collections

- Configurer le fichier `public/admin/config.src.ts`
- Exporter les types avec la commande `yarn gen:types`
- Cette commande va générer un fichier `public/admin/config.yml` et un fichier `src/cms/netlify-entities.ts`

## Déploiement

TODO
