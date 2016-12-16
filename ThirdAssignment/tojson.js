var fs = require('fs');


var data = fs.readFileSync('./FoodFacts.csv', 'utf-8');
var lines = data.split("\n");

//the first line contains the heading of the column which are meta data. so taking it seperately.
var header = lines[0].split(",");
var finaldata = [];
var splitted = [];
var collect_attr;
var obb;
var ctry_count;
var many_countries_arr;
var many_countries;
var re = /,(?=(?:(?:[^\"]*\"){2})*[^\"]*$)/;
var obarray = [];

var k=0;





for (var i = 1; i < lines.length - 1; i++) {
    //this was my regex =>  splitted = lines[i].split(/,(?![^"]*",)/);
    splitted = lines[i].split(re);

    //the countries column may have many countries, so we have to create a seperate object for each country. the below code checks
    //and does it.
    if (splitted[33].includes(",")) {
        many_countries = splitted[33].slice(1, -1);
        many_countries_arr = many_countries.split(/,/);
        for (var m = 0; m < many_countries_arr.length; m++)
        {
        	obb ={
            countries_en: many_countries_arr[m],
            sugars_100g: splitted[102],
            salt_100g: splitted[116],
            carbohydrates_100g: splitted[101],
            fat_100g: splitted[65],
            proteins_100g: splitted[112]
        	}
        	obarray[k++] = obb;
        }


    } else
     {
        obb = {

            countries_en: splitted[33],
            sugars_100g: splitted[102],
            salt_100g: splitted[116],
            carbohydrates_100g: splitted[101],
            fat_100g: splitted[65],
            proteins_100g: splitted[112]
        }
        obarray[k++] = obb;
    }
}

collect_attr = JSON.stringify(obarray, null, "\t\n\t");
//now we have all the data to be written in a single string. Just write it to the json file directly.
console.log(obarray.length);
fs.writeFileSync('./jsonfile', collect_attr, 'utf-8');
