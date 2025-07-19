CREATE DATABASE IF NOT EXISTS locify;

USE locify;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    password VARCHAR(255),
    profile_password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS credentials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    site_name VARCHAR(100),
    site_password VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


-- Do not use below command until need to washout whole database tables.

-- DELETE FROM credentials;
-- DELETE FROM users;
-- ALTER TABLE credentials AUTO_INCREMENT = 1;
-- ALTER TABLE users AUTO_INCREMENT = 1;
