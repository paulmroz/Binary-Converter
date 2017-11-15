var id_numbers=document.getElementsByClassName('button');


for (var i=0; i<id_numbers.length; i++){

		id_numbers[i].onclick=function() {

		var wartosc = document.getElementById('ekran').value;

		var obecny_element=this.value;

	    document.getElementById('ekran').value+=obecny_element;
	};
};

document.getElementById('zamien').onclick=function(){

	var system_from = document.querySelector('input[name="from"]:checked').value;

	var system_to = document.querySelector('input[name="to"]:checked').value;

	var obecna_liczba = document.getElementById('ekran').value;

	var wynik_dzies=convert_to_dec(obecna_liczba,system_from);

	document.getElementById('wynik').value=convert_from_dec(wynik_dzies,system_to);

	console.log({'system_from':system_from,'system_to':system_to});
};

function convert_from_dec(liczba,system) {
	switch (system) {
	  case "dziesietny":
		wynik=liczba;	
	    break;
	  case "szesnastkowy":
	    wynik=parseInt(liczba, 10).toString(16);
	    break;
	  case "osemkowy":
	  	wynik=parseInt(liczba, 10).toString(8);
	    break;
	  case "binarny":
	  	wynik=parseInt(liczba, 10).toString(2);
	    break;  
	

	};
	return wynik;
};


function convert_to_dec(liczba,system) {
	switch (system) {
	  case "dziesietny":
		wynik=liczba;	
	    break;
	  case "szesnastkowy":
	    wynik=parseInt(liczba,16);
	    break;
	  case "osemkowy":
	  	wynik=parseInt(liczba,8);
	    break;
	  case "binarny":
	  	wynik=parseInt(liczba,2);
	    break;  
	

	};
	return wynik;
};


document.getElementById('czyszc').onclick=function(){
	document.getElementById('ekran').value='';
	document.getElementById('wynik').value='';
	
}







