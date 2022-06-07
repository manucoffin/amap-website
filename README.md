# AMAP CMS

## Local Development

1. Start local netlify server: `yarn server`
2. Start the app: `yarn dev`
3. Navigate to `http:localhosst:3000/admin`

## Netlify CMS Config

### Edit the CMS configuration

- Only the `config.src.ts` file should be edited.
- You can edit collections in the `collections` folder

### Generate Collections Types

- Once you are happy with your configuration, you can export the types: `yarn gen:types`
- This will output a `config.yml` file in the admin folder, and a `netlify-entities.ts` in `src/cms`

## Access Netlify CMS Admin Dashboard

When the app is running, the admin dashboard can be accessed via the `/admin` route.
