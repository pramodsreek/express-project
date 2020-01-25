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
