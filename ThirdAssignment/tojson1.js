var fs = require('fs');



var data_arr = fs.readFileSync("./jsonfile");
var data_arr = JSON.parse(data_arr);
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


console.log(json_one_data[0].sugars_100g);
console.log(data_arr.length);
for (var k = 0; k < data_arr.length; k++)
{
    if (data_arr[k].countries_en == "Netherlands")
    {
    	json_one_data[0].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[0].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "Canada")
    {
        json_one_data[1].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[1].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "United Kingdom")
    {
        json_one_data[2].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[2].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "United States") 
    {
        json_one_data[3].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[3].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "Australia") 
    {
        json_one_data[4].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[4].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "France") 
    {
        json_one_data[5].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[5].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "Germany") 
    {
        json_one_data[6].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[6].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "Spain") 
    {
        json_one_data[7].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[7].salt_100g += (isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    } else if (data_arr[k].countries_en == "South Africa") 
    {
        json_one_data[8].sugars_100g += (isNaN(parseFloat(data_arr[k].sugars_100g)) ? 0: (parseFloat(data_arr[k].sugars_100g)));
        json_one_data[8].salt_100g +=(isNaN(parseFloat(data_arr[k].salt_100g)) ? 0: (parseFloat(data_arr[k].salt_100g)));
    }
    else
    {
    	
    }

}
var json_one_output = JSON.stringify(json_one_data,null,"\t\n\t");
fs.writeFileSync('./json_one', json_one_output);