var fs = require('fs');



var data_arr = fs.readFileSync("./jsonfile");
var data_arr = JSON.parse(data_arr);




var nether_count_su=0;
var canada_count_su=0;
var uk_count_su=0;
var us_count_su=0;
var aus_count_su=0;
var france_count_su=0;
var germ_count_su=0;
var spain_count_su=0;
var africa_count_su=0;


var nether_count_sa=0;
var canada_count_sa=0;
var uk_count_sa=0;
var us_count_sa=0;
var aus_count_sa=0;
var france_count_sa=0;
var germ_count_sa=0;
var spain_count_sa=0;
var africa_count_sa=0;


var json_one_data = [
{
    "countries_en": "Netherlands",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "Canada",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "United Kingdom",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "United States",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "Australia",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "France",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "Germany",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "Spain",
    "salt_100g": 0,
    "sugars_100g": 0
},
{
    "countries_en": "South Africa",
    "salt_100g": 0,
    "sugars_100g": 0
}
];




for (var k = 0; k < data_arr.length; k++)
{
    if (data_arr[k].countries_en == "Netherlands")
    {
    	
    		nether_count_su++;
    
    		nether_count_sa++;
    	
    	json_one_data[0].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[0].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "Canada")
    {
    	
    		canada_count_su++;
    	
    		canada_count_sa++;
        json_one_data[1].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[1].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "United Kingdom")
    {
    	
    		uk_count_su++;
   
    		uk_count_sa++;
        json_one_data[2].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[2].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "United States") 
    {
    
    		us_count_su++;

    		us_count_sa++;
        json_one_data[3].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[3].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "Australia") 
    {
    
    		aus_count_su++;
    
    		aus_count_sa++;
        json_one_data[4].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[4].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "France") 
    {
  
    		france_count_su++;
    	
    		france_count_sa++;
        json_one_data[5].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[5].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "Germany") 
    {
    
    		germ_count_su++;

    		germ_count_sa++;
        json_one_data[6].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[6].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "Spain") 
    {
    	
    		spain_count_su++;

    		spain_count_sa++;
        json_one_data[7].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[7].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "South Africa") 
    {

    		africa_count_su++;

    		africa_count_sa++;
        json_one_data[8].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[8].salt_100g +=(isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    }
    else
    {
    	
    }

}

json_one_data[0].sugars_100g /= nether_count_su;
json_one_data[0].salt_100g /= nether_count_sa;

json_one_data[1].sugars_100g /= canada_count_su ;
json_one_data[1].salt_100g /= canada_count_sa;
json_one_data[2].sugars_100g /= uk_count_su;
json_one_data[2].salt_100g /= uk_count_sa;
json_one_data[3].sugars_100g /= us_count_su;
json_one_data[3].salt_100g /= us_count_sa;
json_one_data[4].sugars_100g /= aus_count_su;
json_one_data[4].salt_100g /= aus_count_sa;
json_one_data[5].sugars_100g /= france_count_su;
json_one_data[5].salt_100g /= france_count_sa;
json_one_data[6].sugars_100g /= germ_count_su;
json_one_data[6].salt_100g /= germ_count_sa;
json_one_data[7].sugars_100g /= spain_count_su;
json_one_data[7].salt_100g /= spain_count_sa;
json_one_data[8].sugars_100g /= africa_count_su;
json_one_data[8].salt_100g /= africa_count_sa;

var json_one_output = JSON.stringify(json_one_data,null,"\t\n\t");
fs.writeFileSync('./json_one', json_one_output);