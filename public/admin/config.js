module.exports = {"backend":{"name":"github","repo":"Teide-Technologies/amap-website","branch":"main"},"cms_manual_init":true,"media_folder":"public/static/img","slug":{"encoding":"ascii","clean_accents":true,"sanitize_replacement":"_"},"collections":[{"name":"components","label":"Informations générales","files":[{"label":"Footer du site","name":"footer","file":"content/footer.md","fields":[{"label":"Adresse","name":"address","widget":"string"},{"label":"Code postal","name":"postcode","widget":"string"},{"label":"Ville","name":"city","widget":"string"},{"label":"Horaires","name":"schedule","widget":"string"},{"label":"Téléphone","name":"phone","widget":"string"},{"label":"Email","name":"email","widget":"string"}]}]},{"name":"pages","label":"Pages","files":[{"label":"Home","name":"home","file":"content/home.md","fields":[{"label":"Title","name":"title","widget":"string"},{"label":"Publish Date","name":"date","widget":"datetime"},{"label":"Body","name":"body","widget":"markdown"}]},{"label":"About","name":"about","file":"content/about.md","fields":[{"label":"Title","name":"title","widget":"string"},{"label":"Publish Date","name":"date","widget":"datetime"},{"label":"Body","name":"body","widget":"markdown"}]}]},{"label":"Blog","name":"blog","folder":"content/blogPosts","create":true,"slug":"{{year}}-{{month}}-{{day}}_{{slug}}","fields":[{"label":"Title","name":"title","widget":"string","required":true},{"label":"Publish Date","name":"date","widget":"datetime","required":true},{"label":"Featured Image","name":"thumbnail","widget":"image","required":true},{"label":"Body","name":"body","widget":"markdown","required":true}]}]};