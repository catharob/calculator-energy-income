
//calculates the percent you spend on energy each year
function calculate(){
	//grabs values from form
	var bill = document.getElementById("bill").value;
	var income = document.getElementById("income").value;

	//calculate percent of income spent on electricity and some other metrics
	var annualSpending = bill*12;	
	var percOnElec = annualSpending / income * 100;
	var percRounded = Math.round(percOnElec * 10)/10;

	//Rough rate based on our data for energy assistance need
	var povertyEnergyRate = .25;
	var hypoPovEnRate = (income*povertyEnergyRate) / 12;
	var hypoPovEnRateRounded = Math.round(hypoPovEnRate * 100)/100;

	// prints result to page
	document.getElementById("results").innerHTML = "<h3>You spend <strong>" + percRounded + "%</strong> of your income on electricity.";

    //compare with benchmarks
	document.getElementById("comparison").innerHTML = "Economists consider <strong>6%</strong> of income or less to be an affordable or sustainable bill. For the 18 million American households living below the poverty level, roughly a quarter of income can go to paying for energy. To put that into perspective, this would be like if your monthly bill was <strong>$" + hypoPovEnRateRounded +"</strong>.";

};
//form validation
$("#myForm").validate({
	messages: {
		bill: "Required!",
		income: "Required!"
	}
});

//reset button
function reset(){
	document.getElementById("bill").value="";
	document.getElementById("income").value="";
	document.getElementById("results").innerHTML = "";
	document.getElementById("comparison").innerHTML = "";

};

//automatic monthly energy bill based on national average - EIA calculates national annual bill to be $2024. 2024/12 = 168.67
function populateNational(){
	document.getElementById("bill").value="169";
};

// function populateColorado(){
// 	document.getElementById("bill").value="101";
// }