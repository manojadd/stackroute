

var fs = require('fs');

var data_in = fs.readFileSync('./jsonfile','utf-8');
data_in = JSON.parse(data_in);
//console.log(data_in);
var json_data_two;
var continents;


if(fs.existsSync('json_two'))
{

		console.log("json_two exists.");
		json_data_two = fs.readFileSync('./json_two','utf-8');
		json_data_two = JSON.parse(json_data_two);
}
else
{
	    fs.openSync("json_two",'w');
		fs.writeFileSync("json_two","{}");
		json_data_two = fs.readFileSync('./json_two','utf-8');
		json_data_two = JSON.parse(json_data_two);
}


if(fs.existsSync('json_two_continents'))
{

		console.log("json_two_continents exists.");
		continents = fs.readFileSync('./json_two_continents','utf-8');
		continents = JSON.parse(continents);
}
else
{
	    fs.openSync("json_two_continents",'w');
		fs.writeFileSync("json_two_continents","{}");
		continents = fs.readFileSync('./json_two_continents','utf-8');
		continents = JSON.parse(continents);
}



function add_continent(continent_name)
{
     if(continents.hasOwnProperty(continent_name+"_list"))
     	console.log(continent_name + " Already exists, add_continent failed.\n");

     else
     {

     	continents[continent_name+"_list"] = [];
     	json_data_two[continent_name] = {fat: 0,carb:0,prot:0,count:0};
     	console.log(continent_name + " Added.\n");
     }
}

function add_country(country_name,continent_name)
{
	var count =0;
	
	if(!continents.hasOwnProperty(continent_name+"_list"))
		console.log("Continent "+continent_name+" is not there in the continents list. Add it first. Adding "+country_name+" failed.\n");
	else if(continents[continent_name+"_list"].includes(country_name))
	{
		console.log(country_name + " is already in the list. adding failed.")
	}
	else
	{
		var json_fat = json_data_two[continent_name].fat*json_data_two[continent_name].count;
		var json_carb = json_data_two[continent_name].carb*json_data_two[continent_name].count;
		var json_prot = json_data_two[continent_name].prot*json_data_two[continent_name].count;
		continents[continent_name+"_list"].push(country_name);
		
		for(var i = 0;i<data_in.length;i++)
		{
			if(country_name == data_in[i].countries_en)
			{
			   json_data_two[continent_name].count++;
				json_fat += (isNaN(parseFloat(data_in[i].fat_100g)) ? 0: parseFloat(data_in[i].fat_100g));
				json_carb += (isNaN(parseFloat(data_in[i].carbohydrates_100g)) ? 0: parseFloat(data_in[i].carbohydrates_100g));
				json_prot += (isNaN(parseFloat(data_in[i].proteins_100g)) ? 0: parseFloat(data_in[i].proteins_100g));
			}
		}
		console.log(json_fat);
		console.log(json_prot);
		console.log(json_carb);
		json_data_two[continent_name].fat = json_fat/json_data_two[continent_name].count;
		json_data_two[continent_name].carb = json_carb/json_data_two[continent_name].count;
		json_data_two[continent_name].prot = json_prot/json_data_two[continent_name].count;
		console.log(country_name+" added to "+continent_name+"\n");
	}

}


add_continent("NE");
add_continent("CE");
add_continent("SE");
add_country("United Kingdom","NE");
add_country("Denmark","NE");
add_country("Sweden","NE");
add_country("Norway","NE");
add_country("France","CE");
add_country("Belgium","CE");
add_country("Germany","CE");
add_country("Switzerland","CE");
add_country("Netherlands","CE");
add_country("Portugal","SE");
add_country("Greece","SE");
add_country("Italy","SE");
add_country("Spain","SE");
add_country("Croatia","SE");
add_country("Albania","SE");
add_continent("Asia");
add_country("Taiwan","Asia");




json_data_two =JSON.stringify(json_data_two,null,"\t\n\t");	
fs.writeFileSync('json_two',json_data_two);
continents = JSON.stringify(continents,null,"\t\n\t");
fs.writeFileSync('json_two_continents',continents);