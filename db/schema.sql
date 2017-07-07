/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the happiness chart database and specified it for use.
/*CREATE DATABASE Happiness_Chart;*/
USE happines_levels;

-- Create the table plans.
CREATE TABLE Overall_Happiness
(
id INT(10) AUTO_INCREMENT NOT NULL,
PRIMARY KEY (id)
);

SELECT 
INNER JOIN overall_happiness ON 2017_happinesslevels = overall_happiness;

