module.exports = function(entries){
	var rows = []; // MUST BE ARRAY TO JOIN ALL ENTRIES

	// PARSE ENTRIES
	for(var index=0, len=entries.length; index<len; index++){
		var key = entries[index].gsx$key.$t;
		var value = entries[index].gsx$value.$t;

		rows.push("$lang[\""+key+"\"] = \""+value+"\";");
	}

	// RETURN OBJECT WITH FILENAME AND ROWS
	// OR RETURN ARRAY WIDTH OBJECTS CONTAINNING
	// FILENAME AND ROWS
	// Ex: 
	//  [
	//		{
	//			filename: './test2.php',
	//			rows: rows
	//		},
	//		{
	//			filename: './test2.php',
	//			rows: rows
	//		}
	//	]
	return {
		filename: './test2.php',
		rows: rows
	};
};