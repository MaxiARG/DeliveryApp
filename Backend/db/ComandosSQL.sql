create TABLE usuario ( 
    id BIGINT PRIMARY key AUTO_INCREMENT, 
    email VARCHAR(100) not null unique, 
    name varchar(100) not null, 
    lastname varchar(100) not null, 
    phone varchar(100) not null unique,
    image varchar(255) null,
    pass varchar(100) not null, 
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);