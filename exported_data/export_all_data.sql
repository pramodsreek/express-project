--- The folder should have permission to write data. 
--- show variables like 'secure%';
--- check to make sure secure_file_priv has a value and is pointing to the folder.
--- If there is no value, it should be set in /etc/my.cnf or another location where MySQL looks for this file.
--- If there is not my.cnf file, the file can be created and at least, the following lines should be added to set this variable.
--- [mysqld]
--- # Only allow connections from localhost
--- bind-address = 0.0.0.0
--- secure-file-priv = '/tmp/exported_data/'
--- restart MySQL server and also the configuration should be pointing to /etc/my.cnf
--- once the server starts, secure_file_priv should be pointing to the set folder, that can write exported data.


SELECT 
    'riderId', 'firstname', 'lastname', 'email', 'mobile', 'createdAt', 'updatedAt'
UNION ALL 
SELECT 
    riderId, firstname, lastname, email, mobile, createdAt, updatedAt
FROM
    Riders
INTO OUTFILE '/tmp/exported_data/Riders.csv' 
FIELDS ENCLOSED BY '"' 
TERMINATED BY ',' 
ESCAPED BY '"' 
LINES TERMINATED BY '\r\n';


SELECT 'riderId','tollRoadPreferred','shortDurationPreferred','createdAt','updatedAt'
UNION ALL
SELECT riderId, tollRoadPreferred, shortDurationPreferred, createdAt, updatedAt 
FROM RiderPreferences 
INTO OUTFILE '/tmp/exported_data/RiderPreferences.csv' 
FIELDS ENCLOSED BY '"' 
TERMINATED BY ',' 
ESCAPED BY '"' 
LINES TERMINATED BY '\r\n';


SELECT 'productId','productName','capacity','basePrice','minimumPrice', 
'costPerMinute','costPerDistance','serviceFees','createdAt','updatedAt'
UNION ALL
SELECT productId, productName, capacity, basePrice, minimumPrice, 
costPerMinute, costPerDistance, serviceFees, createdAt, updatedAt
FROM Products
INTO OUTFILE '/tmp/exported_data/Products.csv' 
FIELDS ENCLOSED BY '"' 
TERMINATED BY ',' 
ESCAPED BY '"' 
LINES TERMINATED BY '\r\n';

SELECT 'appPartnerId','appPartnerName','isGlobalAppPartner','revenueSharing',
'revenueSharePercentage','createdAt','updatedAt'
UNION ALL
SELECT appPartnerId, appPartnerName, isGlobalAppPartner, revenueSharing,
revenueSharePercentage, createdAt, updatedAt
FROM AppPartners
INTO OUTFILE '/tmp/exported_data/AppPartners.csv' 
FIELDS ENCLOSED BY '"' 
TERMINATED BY ',' 
ESCAPED BY '"' 
LINES TERMINATED BY '\r\n';

SELECT 'productId','appPartnerId','createdAt','updatedAt'
UNION ALL 
SELECT productId, appPartnerId, createdAt, updatedAt 
FROM ProductAppPartners
INTO OUTFILE '/tmp/exported_data/ProductAppPartners.csv' 
FIELDS ENCLOSED BY '"' 
TERMINATED BY ',' 
ESCAPED BY '"' 
LINES TERMINATED BY '\r\n';