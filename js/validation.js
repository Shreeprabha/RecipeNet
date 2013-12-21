/**
 * 
 */

function validate_1() {
	var val = parseFloat(document.getElementById("var1").value);

	if((val<= 1.75 && val> 1.7)|| (val<= 1.7 && val> 1.65)|| (val<= 1.65 && val> 1.6)||(val<= 1.6 && val> 1.45) 
			|| (val<= 1.45 && val> 1.3) || (val<= 1.3 && val> 1.2) ||(val<= 1.2 && val>= 1.0))
		document.getElementById("bd1").innerText = "";

	else document.getElementById("bd1").innerText = "out of range";
}

/**
 * 
 */
function validate_2() {
	var val = parseFloat(document.getElementById("var2").value);

	if((val > 15 )||(val <= 15 && val > 12.5)||(val<= 12.5 && val> 10)||(val<= 10 && val> 7.5)
			||(val<= 7.5 && val> 5)||(val<= 5 && val>= 2.5))
		document.getElementById("awrc1").innerText = "";

	else document.getElementById("awrc1").innerText = "out of range";
}

/**
 * 
 */
function validate_3() {
	var val = parseFloat(document.getElementById("var3").value);

	if((val > 70)||(val<= 70 && val> 50)||(val<= 50 && val> 30)||(val<= 30 && val> 3)||(val<= 3 && val> 1)
			|| (val<= 1 && val> 0.5) ||(val<= 0.5 && val> 0.2)||(val<= 0.2 && val> 0.1)||(val<= 0.1 && val> 0.05)
			|| (val<= 0.05 && val> 0.01)||(val<= 0.01 && val> 0.005)||(val<= 0.005 && val>= 0.001))
		document.getElementById("hc1").innerText = "";

	else document.getElementById("hc1").innerText = "out of range";
}

/**
 * No out of range
 */
function validate_4() {
	document.getElementById("oc1").innerText = "";
}

/**
 * 
 */
function validate_5() {
	var val = parseFloat(document.getElementById("var5").value);

	if((val > 15) ||(val<= 15 && val> 12.5)||(val<= 12.5 && val> 10)||(val<= 10 && val> 7.5)||(val<= 7.5 && val> 5)
			||(val<= 5 && val>=2.5))
		document.getElementById("ncp1").innerText = "";

	else document.getElementById("ncp1").innerText = "out of range";
}

/**
 * 
 */
function validate_6() {
	var val = parseFloat(document.getElementById("var6").value);

	if((val<= 1.75 && val> 1.7)|| (val<= 1.7 && val> 1.65)|| (val<= 1.65 && val> 1.6)|| (val<= 1.6 && val> 1.55)
			|| (val<= 1.55 && val> 1.5) || (val<= 1.5 && val> 1.45)|| (val<= 1.45 && val> 1.3)
			||(val<= 1.3 && val> 1.2) ||(val<= 1.2 && val>= 1.0))
		document.getElementById("bd2").innerText = "";

	else document.getElementById("bd2").innerText = "out of range";
}

/**
 * 
 */
function validate_7() {
	var val = parseFloat(document.getElementById("var7").value);

	if((val > 15 )||(val <= 15 && val > 12.5)||(val<= 12.5 && val> 10)||(val<= 10 && val> 7.5)
			||(val<= 7.5 && val> 5)||(val<= 5 && val>= 2.5))
		document.getElementById("awrc2").innerText = "";

	else document.getElementById("awrc2").innerText = "out of range";
}

function validate_8() {
	var val = parseFloat(document.getElementById("var8").value);

	if((val > 30.0)||(val<= 30.0 && val> 3.0)||(val<= 3.0 && val> 1.0)||(val<= 1.0 && val> 0.5)||(val<= 0.5 && val> 0.2)||(val<= 0.2 && val> 0.1)||(val<= 0.1 && val> 0.005))
		document.getElementById("hc2").innerText = "";

	else document.getElementById("hc2").innerText = "out of range";
}

/**
 * No out of range
 */
function validate_9() {
	ocument.getElementById("oc2").innerText = "";
}

/**
 * 
 */
function validate_10() {
	var val = parseFloat(document.getElementById("var10").value);

	if((val > 15)||(val<= 15 && val> 12.5)||(val<= 12.5 && val> 10)||(val<= 10 && val> 5)||(val<= 5 && val>=2.5))
		document.getElementById("ncp2").innerText = "";

	else document.getElementById("ncp2").innerText = "out of range";
}

/**
 * 
 */
function validate_11() {
	var val = parseFloat(document.getElementById("var11").value);

	if((val<= 1.75 && val> 1.7) || (val<= 1.7 && val> 1.65)||(val<= 1.65 && val> 1.6) ||(val<= 1.6 && val> 1.55)||(val<= 1.55 && val> 1.5)||(val<= 1.5 && val> 1.45)
			||(val<= 1.45 && val> 1.3)||(val<= 1.3 && val> 1.2)||(val<= 1.2 && val>= 1.0))
		document.getElementById("bd3").innerText = "";

	else document.getElementById("bd3").innerText = "out of range";
}

/**
 * 
 */
function validate_12() {
	var val = parseFloat(document.getElementById("var12").value);

	if((val > 15 )||(val <= 15 && val > 12.5)||(val<= 12.5 && val> 10)||(val<= 10 && val> 7.5)
			||(val<= 7.5 && val> 5)||(val<= 5 && val>= 2.5))
		document.getElementById("awrc3").innerText = "";

	else document.getElementById("awrc3").innerText = "out of range";
}

/**
 * 
 */
function validate_13() {
	var val = parseFloat(document.getElementById("var13").value);

	if(!((val<= 0.01) || (val<= 0.05 && val> 0.01) || (val<= 0.1 && val> 0.05) || (val<= 0.2 && val> 0.1) || (val<= 0.5 && val> 0.2)))
		document.getElementById("hc3").innerText = "out of range";
	else document.getElementById("hc3").innerText = "";
}

/**
 * 
 */
function validate_14() {
	var val = parseFloat(document.getElementById("var14").value);

	if(!((val<= 0.2) || (val<= 0.3 && val> 0.2) || (val<= 0.45 && val> 0.3) || (val<= 0.6 && val> 0.45) || (val<= 1.2 && val> 0.9)))
		document.getElementById("oc3").innerText = "out of range";
	else document.getElementById("oc3").innerText = "";
}

/**
 * 
 */
function validate_15() {
	var val = parseFloat(document.getElementById("var15").value);

	if(!((val > 15) || (val<= 12.5 && val> 10) || (val<= 10 && val> 7.5) || (val<= 7.5 && val> 5) || (val<= 5)))
		document.getElementById("ncp3").innerText = "out of range";
	else document.getElementById("ncp3").innerText = "";
}