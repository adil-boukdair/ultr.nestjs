# README #

### Description ###
This is a CRUD API app using nestjs and typeorm with mysql database


CRUD URL:
GET http://localhost:3000/cars
    
GET http://localhost:3000/cars/:id*
    
DELETE http://localhost:3000/cars/:id
    
POST http://localhost:3000/cars
    
Create new ressource

Body json example:
```json
{
	"price": 78000,
  	"firstRegistrationDate": "2019-12-01",
  	"manifacturer": {
      	"name": "BMW",
      	"phone": "059399483",
      	"siret": "090 9939993 9929"
    },
  	"owners":[
    {
"name": "John Doe",
"purchaseDate": "2019-12-01"
}]
}
```
PATCH http://localhost:3000/cars/:id

Update ressource.

Body json example:.
```json
{
	"price": 71000,
  	"firstRegistrationDate": "2017-12-01"
}
```
## Installation

```bash
$ npm install
```

# Running the app

development
```bash
$ npm run start
```
watch mode
```bash
$ npm run start:dev
```
production mode
```bash
$ npm run start:prod
```