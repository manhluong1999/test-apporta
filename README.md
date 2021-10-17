1. SQL
- Set up DB
```
docker run --name postgres-server -p 5432:5432 -e POSTGRES_ROOT_PASSWORD=1 -d postgres
```
- Create DATABASE
```
postgres=> CREATE DATABASE api;

postgres=> \c api
```
- CREATE TABLE
```
CREATE TABLE user (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
);
CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  price INT
);
CREATE TABLE product_transaction (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(30),
  product_id VARCHAR(30),
  price INT,
  status BOOLEAN,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (product_id) REFERENCES product(id)
);
```
2. Set up project
```
git clone https://github.com/manhluong1999/test-apporta
npm install
```
3. Run project
```
node src/app.js
```