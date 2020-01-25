
-- get rider with preferences

CREATE VIEW v_riders_with_preferences AS 
SELECT Riders.riderId, Riders.firstname, Riders.lastname, Riders.email, 
Riders.mobile, RiderPreferences.tollRoadPreferred, 
RiderPreferences.shortDurationPreferred 
FROM Riders
LEFT JOIN RiderPreferences 
ON Riders.riderId = RiderPreferences.riderId;

-- get app partner and products with details

CREATE VIEW v_app_partner_and_products AS
SELECT ProductAppPartners.appPartnerId, AppPartners.appPartnerName,
ProductAppPartners.productId,  Products.productName
FROM ProductAppPartners
INNER JOIN AppPartners ON AppPartners.appPartnerId = ProductAppPartners.appPartnerId
INNER JOIN Products ON Products.productId = ProductAppPartners.productId;

