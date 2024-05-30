# PACKAGES

✅ Install basic packages  

`npm install bcrypt cors dotenv express express-validator jsonwebtoken morgan swagger-jsdoc swagger-ui-express`

✅ Install dev packages  

`npm i @faker-js/faker -D`

# DATABASES

## MongoDB
✅ Install mongoose  

`npm i mongoose`

✅ Create **db** folder and **connect.js** file **(db/connect.js)** and add this code:  


```
const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("MongoDB Conexion Exitosa"))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
```

✅ Change **src/app** => **// Start Api** for this lines:  


```
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Servidor iniciado en el puerto: ${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
```

✅ Create **models** folder

## Prisma
✅ Install prisma  

`npm i prisma -D`

✅ Init prisma  

`npx prisma init`

✅ In **services** folder add **db.js** with this code:  


```
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = prisma;
```

and import in every service file  

`const prisma = require("./db.js");`

## Sequelize

✅ Install sequelize  

`npx sequelize-cli init`

✅ Rename **config.json** to **config.js** in **config** folder

✅ Add **module.exports** to **config.js** and import **dotenv**, like this:  


```
require("dotenv").config();

module.exports = {
  development: {
    .....
    }
}
```

✅ In the file **/models/index.js** change  

`/../config/config.json` to `/../../config/config.js`

✅ Create file **.sequelizerc** with the content:

```
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'config.js'),
  'models-path': path.resolve('./database/models'),
  'seeders-path': path.resolve('./database/seeders'),
  'migrations-path': path.resolve('./database/migrations')
}
```

✅ Create database:  

`npx sequelize-cli db:create`
