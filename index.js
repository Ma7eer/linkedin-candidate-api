const express = require('express');
const app = express();

const { Directus } = require('@directus/sdk');

const PORT = 3000;
const DIRECTUS_INSTANCE_URL = 'http://localhost:8055';

const directus = new Directus(DIRECTUS_INSTANCE_URL);

app.get('/candidates', async (req, res) => {
    try {
        // NOTE: No auth because the collection has been set to public on Directus
        const candidates = await directus.items('candidate').readByQuery({ sort: ['id'] });
        res.json({'candidates': candidates.data});
    } catch (error) {
        console.log(error);
    }
})

app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`);
})