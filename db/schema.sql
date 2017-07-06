/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the happiness chart database and specified it for use.
/*CREATE DATABASE Happiness_Chart;*/
USE Happiness_Chart;

-- Create the table plans.
CREATE TABLE Happiness_Stats
(
id INT(10) AUTO_INCREMENT,
country varchar(255) NOT NULL,
happiness_rank INT(10) NOT NULL,
happiness_score INT(10) NOT NULL,
family INT(10) NOT NULL,
life_expectancy INT(15) NOT NULL,
PRIMARY KEY (id)
);

