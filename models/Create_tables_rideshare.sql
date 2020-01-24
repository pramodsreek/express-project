
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

CREATE VIEW v_incorrect_rider_emails AS
    SELECT email, count(email) number_of_incorrect_email_ids FROM riders 
    WHERE firstname = lastname 
    GROUP BY email
    ORDER BY number_of_incorrect_email_ids DESC;

CREATE VIEW v_preference_anomaly AS
WITH 
TollRoadPreference AS (SELECT tollRoadPreferred, COUNT(tollRoadPreferred) no_of_toll_road_preference
 FROM RiderPreferences WHERE updatedAt < DATE_SUB(NOW(), INTERVAL 6 HOUR) AND tollRoadPreferred != shortDurationPreferred 
 GROUP BY tollRoadPreferred),
ShortDurationPreference AS (SELECT shortDurationPreferred, COUNT(shortDurationPreferred) no_of_short_duration_preference
 FROM RiderPreferences WHERE updatedAt < DATE_SUB(NOW(), INTERVAL 6 HOUR) AND tollRoadPreferred != shortDurationPreferred
 GROUP BY shortDurationPreferred )
SELECT no_of_toll_road_preference TollRoad, no_of_short_duration_preference ShortDuration, 
CASE
    WHEN shortDurationPreferred = 0 THEN 'Not Preferred'
    ELSE 'Preferred'
END Preference
FROM TollRoadPreference 
INNER JOIN ShortDurationPreference ON tollRoadPreferred = shortDurationPreferred
ORDER BY shortDurationPreferred DESC;

CREATE VIEW v_app_partners_with_max_revenue_sharing AS
SELECT isGlobalAppPartner, COUNT(isGlobalAppPartner) NumberOfPartners, 
GROUP_CONCAT(appPartnerName SEPARATOR ',') ListOfParners,
CASE
    WHEN isGlobalAppPartner = 0 THEN 'Local App Partner'
    ELSE 'Global App Partner'
END PartnerType 
FROM AppPartners  
WHERE revenueSharePercentage = 50
GROUP BY isGlobalAppPartner
ORDER BY isGlobalAppPartner desc;


CREATE VIEW v_riders_with_preferences AS 
SELECT Riders.riderId, Riders.firstname, Riders.lastname, Riders.email, 
Riders.mobile, RiderPreferences.tollRoadPreferred, 
RiderPreferences.shortDurationPreferred 
FROM Riders
LEFT JOIN RiderPreferences 
ON Riders.riderId = RiderPreferences.riderId;


CREATE VIEW v_app_partner_and_products AS
SELECT ProductAppPartners.appPartnerId, AppPartners.appPartnerName,
ProductAppPartners.productId,  Products.productName
FROM ProductAppPartners
INNER JOIN AppPartners ON AppPartners.appPartnerId = ProductAppPartners.appPartnerId
INNER JOIN Products ON Products.productId = ProductAppPartners.productId;

-- if the constraint has to be dropped, name the constraint
ALTER TABLE RiderPreferences DROP CONSTRAINT riderpreferences_ibfk_1;

-- DELETE CASCADE will delete the child records if the parent record is deleted.
ALTER TABLE RiderPreferences 
ADD CONSTRAINT riderpreferences_ibfk_1 FOREIGN KEY (riderId)
        REFERENCES Riders(riderId)
        ON DELETE CASCADE;
