/**
 * Coarse Texture : BD
 * @param val
 * @returns {Number}
 */
function BD1(val) {
	if(val<= 1.75 && val> 1.7) return 0.8;
	else if(val<= 1.7 && val> 1.65) return 0.85;
	else if(val<= 1.65 && val> 1.6) return 0.9;
	else if(val<= 1.6 && val> 1.45) return 1.0;
	else if(val<= 1.45 && val> 1.3) return 0.9;
	else if(val<= 1.3 && val> 1.2) return 0.8;
	else if(val<= 1.2 && val>= 1.0) return 0.7;
	
	else return 0; /* out of range */
}

/**
 * Fine Texture : BD
 * @param val
 * @returns {Number}
 */
function BD2(val) {
	if(val<= 1.75 && val> 1.7) return 0.7;
	else if(val<= 1.7 && val> 1.65) return 0.75;
	else if(val<= 1.65 && val> 1.6) return 0.8;
	else if(val<= 1.6 && val> 1.55) return 0.85;
	else if(val<= 1.55 && val> 1.5) return 0.9;
	else if(val<= 1.5 && val> 1.45) return 0.95;
	else if(val<= 1.45 && val> 1.3) return 1.0;
	else if(val<= 1.3 && val> 1.2) return 0.9;
	else if(val<= 1.2 && val>= 1.0) return 0.8;
	
	else return 0; /* out of range */
}

/**
 * Upland + Paddy : AWRC
 * @param val
 * @returns {Number}
 */
function AWRC(val) {
	if(val > 15 ) return 1.0;
	else if(val <= 15 && val > 12.5) return 0.95;
	else if(val<= 12.5 && val> 10) return 0.90;
	else if(val<= 10 && val> 7.5) return 0.80;
	else if(val<= 7.5 && val> 5) return 0.75;
	else if(val<= 5 && val>= 2.5) return 0.7;
	
	else return 0;
}

/**
 * Upland : HC
 * @param val
 * @returns {Number}
 */
function HC1(val) {
	if(val > 70) return 0.6;
	else if(val<= 70 && val> 50) return 0.70;
	else if(val<= 50 && val> 30) return 0.80;				
	else if(val<= 30 && val> 3) return 0.90;
	else if(val<= 3 && val> 1) return 1.0;
	else if(val<= 1 && val> 0.5) return 0.95;
	else if(val<= 0.5 && val> 0.2) return 0.9;
	else if(val<= 0.2 && val> 0.1) return 0.85;
	else if(val<= 0.1 && val> 0.05) return 0.8;
	else if(val<= 0.05 && val> 0.01) return 0.75;
	else if(val<= 0.01 && val> 0.005) return 0.7;
	else if(val<= 0.005 && val>= 0.001) return 0.65;
	
	else return 0;
}

/**
 * Upland : OC
 * @param val
 * @returns {Number}
 */
function OC1(val) {
	if(val<= 0.2) return 0.7;
	else if(val<= 0.3 && val> 0.2) return 0.75;
	else if(val<= 0.45 && val> 0.3) return 0.80;
	else if(val<= 0.6 && val> 0.45) return 0.85;
	else if(val<= 0.9 && val> 0.6) return 0.9;
	else if(val<= 1.2 && val> 0.9) return 0.95;
	
	else return 1; /* no out of range */
}

/**
 * Upland : NCP
 * @param val
 * @returns {Number}
 */
function NCP1(val) {
	if(val > 15) return 0.9;
	else if(val<= 15 && val> 12.5) return 1.0;
	else if(val<= 12.5 && val> 10) return 0.9;
	else if(val<= 10 && val> 7.5) return 0.80;
	else if(val<= 7.5 && val> 5) return 0.70;
	else if(val<= 5 && val>=2.5) return 0.65;
	
	else return 0;
}

/**
 * Paddy : BD 
 * @param val
 * @returns {Number}
 */
function BD3(val) {
	if(val<= 1.75 && val> 1.7) return 0.85;
	else if(val<= 1.7 && val> 1.65) return 0.9;
	else if(val<= 1.65 && val> 1.6) return 0.95;
	else if(val<= 1.6 && val> 1.55) return 1.0;
	else if(val<= 1.55 && val> 1.5) return 0.95;
	else if(val<= 1.5 && val> 1.45) return 0.9;
	else if(val<= 1.45 && val> 1.3) return 0.85;
	else if(val<= 1.3 && val> 1.2) return 0.75;
	else if(val<= 1.2 && val>= 1.0) return 0.65;
	
	else return 0;
}


/**
 * Paddy : HC
 * @param val
 * @returns {Number}
 */
function HC2(val) {
	if(val > 30.0) return 0.6;
	else if(val<= 30.0 && val> 3.0) return 0.7;
	else if(val<= 3.0 && val> 1.0) return 0.8;
	else if(val<= 1.0 && val> 0.5) return 0.85;
	else if(val<= 0.5 && val> 0.2) return 0.9;
	else if(val<= 0.2 && val> 0.1) return 0.95;
	else if(val<= 0.1 && val> 0.005) return 1.0;
	
	else return 0;
}

/**
 * Paddy : OC
 * @param val
 * @returns {Number}
 */
function OC2(val) {
	if(val <= 0.6) return 1;
	else if(val<= 0.9 && val> 0.6) return 0.95;
	else if(val<= 1.2 && val> 0.9) return 0.9;
	
	else return 0.85; /* no out of range */
}

/**
 * Paddy : NCP
 * @param val
 * @returns {Number}
 */
function NCP2(val) {
	if(val > 15) return 0.8;
	else if(val<= 15 && val> 12.5) return 0.85;
	else if(val<= 12.5 && val> 10) return 0.9;
	else if(val<= 10 && val> 5) return 0.95;
	else if(val<= 5 && val>=2.5) return 1.0;
	
	else return 0;
}

/**
 * 
 */
function getRating1() {
	var mag1 = document.getElementById("var1").value;
	var rate1 = BD1(parseFloat(mag1));
	document.getElementById("bd1").innerText = rate1;

	var mag2 = document.getElementById("var2").value;
	var rate2 = AWRC(parseFloat(mag2));
	document.getElementById("awrc1").innerText = rate2;

	var mag3 = document.getElementById("var3").value;
	var rate3 = HC1(parseFloat(mag3));
	document.getElementById("hc1").innerText = rate3;

	var mag4 = document.getElementById("var4").value;
	var rate4 = OC1(parseFloat(mag4));
	document.getElementById("oc1").innerText = rate4;

	var mag5 = document.getElementById("var5").value;
	var rate5 = NCP1(parseFloat(mag5));
	document.getElementById("ncp1").innerText = rate5;

	var pi = rate1*rate2*rate3*rate4*rate5;				
	document.getElementById("pi1").innerText = Math.round(pi * 100) / 100;
}

/**
 * 
 */
function getRating2() {
	var mag1 = document.getElementById("var6").value;
	var rate1 = BD2(parseFloat(mag1));
	document.getElementById("bd2").innerText = rate1;

	var mag2 = document.getElementById("var7").value;
	var rate2 = AWRC(parseFloat(mag2));
	document.getElementById("awrc2").innerText = rate2;

	var mag3 = document.getElementById("var8").value;
	var	rate3 = HC1(parseFloat(mag3));
	document.getElementById("hc2").innerText = rate3;

	var mag4 = document.getElementById("var9").value;
	var	rate4 = OC1(parseFloat(mag4));
	document.getElementById("oc2").innerText = rate4;

	var mag5 = document.getElementById("var10").value;
	var	rate5 = NCP1(parseFloat(mag5));
	document.getElementById("ncp2").innerText = rate5;

	var pi = rate1*rate2*rate3*rate4*rate5;				
	document.getElementById("pi2").innerText = Math.round(pi * 100) / 100;
}

/**
 * 
 */
function getRating3() {
	var mag1 = document.getElementById("var11").value;
	var rate1 = BD3(parseFloat(mag1));
	document.getElementById("bd3").innerText = rate1;

	var mag2 = document.getElementById("var12").value;
	var rate2 = AWRC(parseFloat(mag2));
	document.getElementById("awrc3").innerText = rate2;

	var mag3 = document.getElementById("var13").value;
	var	rate3 = HC2(parseFloat(mag3));
	document.getElementById("hc3").innerText = rate3;

	var mag4 = document.getElementById("var14").value;
	var	rate4 = OC2(parseFloat(mag4));
	document.getElementById("oc3").innerText = rate4;

	var mag5 = document.getElementById("var15").value;
	var	rate5 = NCP2(parseFloat(mag5));
	document.getElementById("ncp3").innerText = rate5;

	var pi = rate1*rate2*rate3*rate4*rate5;				
	document.getElementById("pi3").innerText = Math.round(pi * 100) / 100;
}