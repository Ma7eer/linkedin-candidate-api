const express = require('express');
const app = express();

const { Directus } = require('@directus/sdk');

const PORT = 3000;
const DIRECTUS_INSTANCE_URL = 'http://localhost:8055';

app.use(express.json()) 

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

app.post('/candidate', async (req, res) => {
    try {
        // const sampleCandidate = {
        //     name: 'Person 1',
        //     email: 'person.email@doman.com',
        //     linkedin_url: 'https://www.linkedin.com/in/',
        //     contact_info_url: 'https://www.linkedin.com/in/'
        // }
        await directus.items('candidate').createOne(req.body);
        res.json({message: 'candidate successful added', requestBody: req.body})
    } catch (error) {
        console.log(error);
    }
})

app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`);
})