--- Create table scripts

CREATE TABLE IF NOT EXISTS Riders (
    riderId INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

ALTER TABLE RIDERS ADD COLUMN score INTEGER;

CREATE TABLE IF NOT EXISTS RiderPreferences (
    riderId INT PRIMARY KEY,
    tollRoadPreferred BOOL NOT NULL DEFAULT 0,
    shortDurationPreferred BOOL NOT NULL DEFAULT 0,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (riderId) REFERENCES Riders(riderId)
)  ENGINE=INNODB;

-- if the constraint has to be dropped, name the constraint
ALTER TABLE RiderPreferences DROP CONSTRAINT riderpreferences_ibfk_1;

-- DELETE CASCADE will delete the child records if the parent record is deleted.
ALTER TABLE RiderPreferences 
ADD CONSTRAINT riderpreferences_ibfk_1 FOREIGN KEY (riderId)
        REFERENCES Riders(riderId)
        ON DELETE CASCADE;

CREATE TABLE IF NOT EXISTS AppPartners (
	appPartnerId INT AUTO_INCREMENT PRIMARY KEY,
    appPartnerName VARCHAR(255) NOT NULL,
    isGlobalAppPartner BOOL NOT NULL DEFAULT 0,
    revenueSharing BOOL NOT NULL DEFAULT 0,
    revenueSharePercentage INT DEFAULT 0,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (revenueSharePercentage <= 50)
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Products (
	productId INT AUTO_INCREMENT PRIMARY KEY,
    productName VARCHAR(255) NOT NULL UNIQUE,
    capacity INT NOT NULL,
    basePrice DECIMAL(10, 2) NOT NULL,
    minimumPrice DECIMAL(10, 2) NOT NULL,
    costPerMinute DECIMAL(10, 2) NOT NULL,
    costPerDistance DECIMAL(10, 2) NOT NULL,
    serviceFees DECIMAL(10, 2) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS ProductAppPartners (
	productId INT,
    appPartnerId INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (productId, appPartnerId),
    FOREIGN KEY (productId) REFERENCES Products(productId),
    FOREIGN KEY (appPartnerId) REFERENCES AppPartners(appPartnerId)
)  ENGINE=INNODB;

-- End of create table scripts

