## 🛠 Tech Stack

![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![image](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white) ![image](https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=googlebard&logoColor=fff) ![image](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![image](https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white) ![image](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white) ![image](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)

## Documentation

[Documentation](https://gemini-chatbot-e4tn.onrender.com/api-docs/)


## Run Locally

Go to the project directory

```bash
  cd Gemini-Chatbot
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`: port to run the project, by default is 8080

`MONGO_URL`: url to connect with the MongoDB database

`JWT_SECRET`: secrete string for the JsonWebToken

`JWT_DURATION`: duration of the JsonWebToken

`GEMINI_API_KEY`: key to connect with Gemini API

`FRONT_URL`: url of the frontend deploy, is used in production to avoid cors errors

`LOCAL_URL`: url of the frontend localhost, is used in the local enviroment to avoid cors errors