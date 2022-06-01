# AMAP Website

### Local Development

1. Start local netlify server: `yarn server`
2. Start the app: `yarn dev`
3. Navigate to `http:localhosst:3000/admin`

### Netlify CMS Config

Only the `config.yml` file should be edited.

After editing the config, you have to export it to js file using the command `yarn gen:config`

Don't forget to export the types of the CMS by running `yarn gen:types`

### Workflow

Do the changes in plasmic
Synchronize the project using `yarn plasmic:sync`
In case of new pages, update page name by adding .page at the end of the file
And update its name in plasmic.json

### Access Netlify CMS Admin Dashboard

When the app is running, the admin dashboard can be accessed by the `/admin` route.

// TODO: Faire un script qui update les extensions des pages dans fichier json
