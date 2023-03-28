import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: "postgres",
  password: "12345678",
  database: "postgres",
  host: "database-1.cnudvgltzms6.us-east-1.rds.amazonaws.com",
  port: "5432",
  aws_region: "",
  aws_profile: "",
  aws_media_bucket: "",
  url: "http://localhost:8080",
  jwt: {
    secret: "hello-world-for-jwt-secret-token",
  },
  accessKeyId: "",
  secretAccessKey: ""
};
