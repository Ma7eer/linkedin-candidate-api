# linkedin-candidate-api
An RESTful API developed using Directus to store and enable access to linkedin candidate data.

## Key features
- [x] Connect to MySQL DB
- [x] Store linkedin candidate data (Data that can be extracted from a linkedin profile)
- [x] Via an API call, list all candidate data (No pagination for now)
- [ ] Via an API call, add 1 candidate

#### TODO
- [ ] Add endpoint to create a candidate
- [ ] Store all key env variables in one place
- [ ] Add docs on how to run the project
- [ ] Figure out if directus supports migration and seeding

## Tech used
- Directus (This is what I am exploring)
- SQLite (Comes with Directus docker conveniently 😁)
- Docker & Docker compose (Run Directus instance that is hosted locally)
- Express js (Used to create RESTAPI endpoint)

## Instruction to run the API
1. Clone the repo
2. Open Docker (I just run Docker desktop)
3. In the terminal, navigate to where the `docker-compose.yml` is located and run `docker-compose up -d`. This runs a Directus instance that can be accessed by navigating to: http://localhost:8055 (Confirm the port number on the `docker-compose.yml` file)
4. Login to the dashboard using logs from the `docker-compose.yml` file
5. To run the API type `npm start`

NOTE: I am using the default setting for Directus Docker image which comes with a SQLite DB. If this is ran on any other machine than mine then you won't have any data. See `db_schema.txt` for the current schema. 

## Project purpose
I am building this project to familiarize myself with technologies that are used by my team. This project is meant to be a mini-useful project that can give me a general idea about Directus. 
