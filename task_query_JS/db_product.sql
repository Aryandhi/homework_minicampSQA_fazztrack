CREATE DATABASE db_product;

-- No 1 dan No 2
CREATE TABLE product ( 
  product_id int PRIMARY KEY AUTO_INCREMENT, 
  product_name varchar(255), 
  price int, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP , 
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);

CREATE TABLE user (
	user_id int PRIMARY KEY AUTO_INCREMENT,
    username varchar(255),
    password varchar(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE transaction (
	transaction_id int PRIMARY KEY AUTO_INCREMENT,
  user_id int,
  total_price int,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE transaction 
ADD FOREIGN KEY (user_id) REFERENCES user(user_id);

CREATE TABLE transaction_product (
	transaction_id int,
  product_id int,
  quantity int
);

ALTER TABLE transaction_product 
ADD FOREIGN KEY (transaction_id) REFERENCES transaction(transaction_id);

ALTER TABLE transaction_product 
ADD FOREIGN KEY (product_id) REFERENCES product(product_id);

-- No 3 A
INSERT INTO user (username, password)
VALUES ("andi", "andi123");
INSERT INTO user (username, password)
VALUES ("budi", "budi_ganteng999");

-- No 3 B
INSERT INTO product (product_name, price)
VALUES ("baju", 67000);

INSERT INTO product (product_name, price)
VALUES ("celana", 86000);

INSERT INTO product (product_name, price)
VALUES ("buku", 24000);

INSERT INTO product (product_name, price)
VALUES ("sepatu", 128000);

INSERT INTO product (product_name, price)
VALUES ("sepeda", 1500000);

INSERT INTO product (product_name, price)
VALUES ("bola", 17000);

INSERT INTO product (product_name, price)
VALUES ("komputer", 8956000);

INSERT INTO product (product_name, price)
VALUES ("gelas", 96400);

-- No 3 C

-- data: andi, baju, 2pcs
INSERT INTO transaction (user_id, total_price)
VALUES (1, 67000*2);

-- data: andi, celana, 3pcs
INSERT INTO transaction (user_id, total_price)
VALUES (1, 86000*3);

-- data: budi, komputer, 1pcs
INSERT INTO transaction (user_id, total_price)
VALUES (2, 8956000*1);

-- data: budi, sepatu, 1pcs
INSERT INTO transaction (user_id, total_price)
VALUES (2, 1500000*1);

-- data: budi, celana, 4pcs
INSERT INTO transaction (user_id, total_price)
VALUES (2, 86000*4);

-- data: budi, buku, 4pcs
INSERT INTO transaction (user_id, total_price)
VALUES (2, 24000*4);

-- data: andi, gelas, 2pcs
INSERT INTO transaction (user_id, total_price)
VALUES (1, 96400*2);

-- data: andi, sepatu, 2pcs
INSERT INTO transaction (user_id, total_price)
VALUES (1, 128000*2);

-- No 3 D
INSERT INTO transaction_product (transaction_id, product_id, quantity)
VALUES (1, 1, 2);

INSERT INTO transaction_product (transaction_id, product_id, quantity)
VALUES (2, 2, 3);

INSERT INTO transaction_product (transaction_id, product_id, quantity)
VALUES (3, 7, 1);

INSERT INTO transaction_product (transaction_id, product_id, quantity)
VALUES (4, 4, 1);

INSERT INTO transaction_product (transaction_id, product_id, quantity)
VALUES (5, 2, 4);

INSERT INTO transaction_product (transaction_id, product_id, quantity)
VALUES (6, 3, 4);

INSERT INTO transaction_product (transaction_id, product_id, quantity)
VALUES (7, 8, 2);

INSERT INTO transaction_product (transaction_id, product_id, quantity)
VALUES (8, 4, 2);

-- Mengubah jumlah pembelian gelas oleh user andi menjadi 1 (note: gunakan sub-query)
UPDATE transaction_product
SET quantity = REPLACE(quantity, 2, 1);

-- Menghapus 1 data produk yang memiliki harga terendah (note: gunakan sub-query)
DELETE FROM `product` 
WHERE price = (
    SELECT MIN(price)
    FROM `product`
);

-- Buatlah query yang dapat menampilkan halaman ke 2 dari data produk termurah yang
-- memiliki harga diatas Rp 50.000,00 dimana setiap halamannya berisi 3 data!
SELECT * FROM `product` WHERE price > 50000 LIMIT 2, 3;

-- Total transaksi per user (note: banyak baris sama dengan banyak user)
SELECT `user`.`username`, SUM(`transaction`.`total_price`) 
as total_shopping FROM `user` LEFT JOIN `transaction` 
ON `user`.`user_id` = `transaction`.`user_id` 
GROUP BY `user`.`username`;

-- List produk yang telah diurutkan dari yang paling banyak dibeli (note: berisikan
-- minimal nama produk dan banyak pembelian)
SELECT `product`.`product_name`, `transaction_product`.`quantity` 
FROM `product` JOIN `transaction_product` 
ON `product`.`product_id` = `transaction_product`.`product_id` 
ORDER BY `transaction_product`.`quantity` DESC;