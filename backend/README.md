## 🛠 Tech Stack

![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![image](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white) ![image](https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=googlebard&logoColor=fff) ![image](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![image](https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white) ![image](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white) ![image](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)

## Ejecutar localmente

Ir al directorio del proyecto

```bash
  cd Gemini-Chatbot
  cd backend
```

Instalar las dependencias

```bash
  npm install
```

Ejecutar el servidor

```bash
  npm run dev
```

## Environment Variables

Para ejecutar este proyecto se necesitan las siguientes variables que se deben agregar al archivo .env

`PORT`: puerto en el que correra la API, por defecto es el 8080

`MONGO_URLL`: url para conectar con la base de datos MongoDB

`JWT_SECRET`: palabra secreta que usa JsonWebToken

`JWT_DURATION`: duracion del JsonWebToken

`GEMINI_API_KEY`: API key para conectar con Gemini

`FRONT_URL`: url del frontend desplegado, se usa para evitar problemas de cors en produccion

`LOCAL_URL`: url del frontend desplegado, se usa para evitar problemas de cors de manera local 