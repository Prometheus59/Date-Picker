var generated_date = new Date();
var mail = new Date();
var mailing_days = 0;
var mail_offset = 0;
var disc1 = new Date();
var disc2 = new Date();


var day1, day2;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// date_change: Increments day and month
// date1 == Date object
// num == number of days to increment
function date_change(date, num){
	date.setDate(date.getDate() + num);
}

// Checks if date is a business day
function is_bus(date){
	if ((date.getDay() == 0) || (date.getDay() == 6))
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

// Set dates of disconnect timeline
date_change(disc1, mail_offset + 11);
date_change(disc2, mail_offset + 21);


var month1= months[disc1.getMonth()];
var month2 = months[disc2.getMonth()];

var day1 = month1 + " " + disc1.getDate() + "/" + disc1.getFullYear().toString().substr(-2);
var day2 = month2 + " " + disc2.getDate() + "/" + disc2.getFullYear().toString().substr(-2);

//Email Templating Information
var subject = `Disconnect Timeline\n`;
var message = `${day1} to ${day2}`;

// Force Launch email client
alert(subject + message);

// Print to console to double check
console.log(month1 + " " + disc1.getDate() + "/" + disc1.getFullYear().toString().substr(-2));
console.log(month2 + " " + disc2.getDate() + "/" + disc2.getFullYear().toString().substr(-2));