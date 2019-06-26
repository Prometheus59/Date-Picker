var generated_date = new Date();
var mail = new Date();
var mailing_days = 0;
var mail_offset = 0;
var disc1 = new Date();
var disc2 = new Date();


var day1, day2, month1, month2;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// date_change: Increments day and month
// date: Date object
// num:number of days to increment
function date_change(date, num){
	date.setDate(date.getDate() + num);
}

// Checks if date is a business day
function is_bus(date){
	var d = date.getDay();
	if ((d == 0) || (d == 6))
	{
		return false;
	} else {
		return true;
	}
}

// Set end date of mailing timeline
while (mailing_days < 3){
	date_change(mail, 1);
	if (is_bus(mail)){
		//increment mailing day
		mailing_days++;
	}
	mail_offset++;
}

// Set dates of disconnect timeline (11 day range)
date_change(disc1, mail_offset + 11);
date_change(disc2, mail_offset + 21);


var month1= months[disc1.getMonth()];
var month2 = months[disc2.getMonth()];

var day1 = month1 + " " + disc1.getDate() + "/" + disc1.getFullYear()%100;
var day2 = month2 + " " + disc2.getDate() + "/" + disc2.getFullYear()%100;

//Email Templating Information
var subject = `Disconnect Timeline Confirmation`;
var message = `Good morning,%0D%0A%0D%0AI'd like to confirm the disconnect dates as ${day1} to ${day2}.%0D%0A%0D%0AThank You,%0D%0A%0D%0A- Ryan Karumanchery`;
var mail_string = `mailto:avalentine@elexiconenergy.com?cc=dadams@elexiconenergy.com&subject=` + subject + `&body=` + message;

// Force Launch email client
require("openurl").open(mail_string);

// Print to console to double check
console.log(day1);
console.log(day2);