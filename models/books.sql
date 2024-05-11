CREATE TABLE IF NOT EXISTS books (
    name VARCHAR(255) NOT NULL,
    description INT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO books (name, description) VALUES ("Network", "A book about computer network") 

INSERT INTO books (name, description) VALUES ("Database", "A book about database")