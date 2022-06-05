module.exports = {"backend":{"name":"git-gateway","repo":"manucoffin/amap-website","branch":"main","identity_url":"https://amap-goutte-eau.netlify.app/.netlify/identity","gateway_url":"https://amap-goutte-eau.netlify.app/.netlify/git"},"local_backend":true,"cms_manual_init":true,"media_folder":"public/uploads","public_folder":"/uploads","publish_mode":"editorial_workflow","locale":"fr","slug":{"encoding":"ascii","clean_accents":true},"collections":[{"name":"metadata","label":"Informations du site","files":[{"name":"contact","label":"Informations de contact","file":"content/site_metadata/contact.md","fields":[{"label":"Téléphone","name":"phone","widget":"string","required":true},{"label":"Email","name":"email","widget":"string","required":true}]},{"name":"address","label":"Adresse","file":"content/site_metadata/address.md","fields":[{"label":"Adresse","name":"address","widget":"string","required":true},{"label":"Code postal","name":"postcode","widget":"string","required":true},{"label":"Ville","name":"city","widget":"string","required":true}]},{"name":"amap","label":"Informations de l'AMAP","file":"content/site_metadata/amap.md","fields":[{"label":"Nom de l'AMAP","name":"name","widget":"string","required":true},{"label":"Horaires","name":"schedule","widget":"string","required":false}]}]},{"name":"pages","label":"Pages","files":[{"label":"Adhésion","name":"membership","file":"content/pages/membership.md","fields":[{"label":"Description","name":"description","widget":"markdown","required":true},{"label":"Document","name":"documentPath","widget":"file","media_folder":"/{{media_folder}}/files","public_folder":"{{public_folder}}/files","choose_url":false,"media_library":{"allow_multiple":false},"required":true}]},{"label":"Charte des AMAP","name":"convention","file":"content/pages/convention.md","fields":[{"label":"Contenu","name":"body","widget":"markdown","required":true}]},{"label":"Statuts de l'association","name":"statutes","file":"content/pages/statutes.md","fields":[{"label":"Contenu","name":"body","widget":"markdown","required":true}]}]},{"name":"tutor","label":"Tuteurs","label_singular":"Tuteur","folder":"content/tutors","create":true,"slug":"{{id}}","fields":[{"label":"ID","name":"id","prefix":"tutor","widget":"ncw-id","hidden":true},{"label":"Nom","name":"lastname","widget":"string","required":true},{"label":"Prénom","name":"firstname","widget":"string","required":true},{"label":"Contact","name":"contact","widget":"string","required":false}]},{"name":"producer","label":"Producteurs","label_singular":"Producteur","folder":"content/producers","create":true,"slug":"{{id}}","fields":[{"label":"ID","name":"id","widget":"ncw-id","hidden":true},{"label":"Nom","name":"lastname","widget":"string","required":true},{"label":"Prénom","name":"firstname","widget":"string","required":true},{"label":"Bio","name":"biography","widget":"markdown","required":true},{"label":"Activité","name":"activity","widget":"string","required":true},{"label":"Adresse","name":"address","widget":"string","required":false},{"label":"Code postal","name":"postcode","widget":"string","required":false},{"label":"Ville","name":"city","widget":"string","required":false},{"label":"Téléphone","name":"phone","widget":"string","required":false},{"label":"Email","name":"email","widget":"string","required":false},{"label":"Photo de profil","name":"photoUrl","widget":"image","media_folder":"/{{media_folder}}/images","public_folder":"{{public_folder}}/images","choose_url":false,"media_library":{"allow_multiple":false},"required":true},{"label":"Contrat(s)","name":"contracts","widget":"list","field":{"label":"Nom du contrat","name":"slug","widget":"relation","collection":"contract","search_fields":["title"],"value_field":"{{slug}}","display_fields":["title"]}}]},{"name":"contract","label":"Contrats","label_singular":"Contrat","folder":"content/contracts","create":true,"slug":"{{slug}}","fields":[{"label":"Nom du contrat","name":"title","widget":"string","required":true},{"label":"Description","name":"description","widget":"text","required":true},{"label":"Lien vers le calendrier de distribution","name":"calendarLink","widget":"string","required":true},{"label":"Tuteurs","name":"tutors","widget":"list","field":{"label":"Tuteur","name":"tutor","widget":"relation","collection":"tutor","search_fields":["firstname","lastname"],"value_field":"id","display_fields":["firstname","lastname"]}},{"label":"Image","name":"photoUrl","widget":"image","media_folder":"/{{media_folder}}/images","public_folder":"{{public_folder}}/images","choose_url":false,"media_library":{"allow_multiple":false},"required":true},{"label":"Document","name":"documentPath","widget":"file","media_folder":"/{{media_folder}}/files","public_folder":"{{public_folder}}/files","choose_url":false,"media_library":{"allow_multiple":false},"required":true}]},{"name":"article","label":"Actualités","label_singular":"Actualité","folder":"content/articles","create":true,"slug":"{{slug}}-{{year}}-{{month}}-{{day}}","fields":[{"label":"Titre","name":"title","widget":"string","required":true},{"label":"Date de publication","name":"date","widget":"datetime","required":true},{"label":"Image de couverture","name":"photoUrl","widget":"image","media_folder":"/{{media_folder}}/images","public_folder":"{{public_folder}}/images","choose_url":false,"media_library":{"allow_multiple":false},"required":true},{"label":"Contenu","name":"body","widget":"markdown","required":true}]},{"name":"recipe","label":"Recettes","label_singular":"Recette","folder":"content/recipes","create":true,"slug":"{{id}}","fields":[{"label":"ID","name":"id","widget":"ncw-id","hidden":true},{"label":"Date de publication","name":"date","widget":"datetime","required":true},{"label":"Titre","name":"title","widget":"string","required":true},{"label":"Description","name":"description","widget":"string","required":true},{"label":"Temps de préparation (en minutes)","name":"prepTime","widget":"number","required":true},{"label":"Temps de cuisson (en minutes)","name":"cookTime","widget":"number","required":true},{"label":"Nombre de personnes","name":"yields","widget":"number","required":true},{"label":"Liste d'ingrédients","label_singular":"Ingrédient","name":"ingredients","widget":"list","field":{"label":"Ingrédient","name":"ingredient","widget":"string"},"required":true},{"label":"Instructions","label_singular":"Instruction","name":"instructions","widget":"list","field":{"label":"Ingrédient","name":"ingredient","widget":"string"},"required":true},{"label":"Photo","name":"photoUrl","widget":"image","media_folder":"/{{media_folder}}/images","public_folder":"{{public_folder}}/images","choose_url":false,"media_library":{"allow_multiple":false},"required":true}]}]};