const express = require("express");
const app = express();
const port=8000;
const faker = require('faker');

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser...");
});

const server = app.listen(port, () =>
  console.log(`Nuestro Servidor esta corriendo en el puerto ${server.address().port}!`)
);

class Usuario {
    constructor(){
        this.dni = faker.datatype.uuid();
        this.firsname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Empresa {
    constructor(){
        this.dni = faker.datatype.uuid();
        this.name = faker.company.companyName()
        this.address ={
            streetname: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
  
  const newUser = new Usuario();
  
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  
    const newEnterprise = new Empresa();
    
    res.json(newEnterprise);
  });

  
  app.get("/api/user/company/", (req, res) => {
  
    const newUser = new Usuario();
    const newEnterprise = new Empresa();
    
    res.json([newUser,newEnterprise]);
  });