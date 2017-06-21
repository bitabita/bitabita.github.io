var soal	= document.getElementsByClassName('tengah1');
var a_nya	= [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
var a_nya2	= ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'];
var soalnya	=
[
"20 : 5 = ",
"8 : 8 = ",
"12 : 4 = ",
"21 : 3 = ",
"14 : 7 = ",
"20 : 10 = ",
"36 : 12 = ",
"15 : 3 = ",
"24 : 6 = ",
"10 : 1 = "
];

	for(var i = 0; i < a_nya.length; i++)
	{a_nya[i] = soal[i]; document.getElementById(a_nya2[i]).innerHTML = soalnya[i];}

var b = 0, s = 0;
var Jawaban		= [4, 1, 3, 7, 2, 2, 3, 5, 8, 10];

var Lihat_Hasil = document.getElementById('END');
var Hasil 		= document.getElementById('keluaran');

Lihat_Hasil.onclick = function()
{
	for(var i = 0; i < a_nya.length; i++)
	{
		if(soal[i].value == Jawaban[i]){b++;}
		else {s++}
	}

	var total_nilai	= b*10;
	var hasilakhir	= "Nilai : "		+ total_nilai + "/100";
	var hasilbenar	= "<br>Benar : "	+ b + " Soal";
	var hasilsalah	= "<br>Salah : "	+ s + " Soal";

	Hasil.innerHTML =
		"Jawaban No 1 : "	+ a_nya[0].value +
		"<br>Jawaban No 2 : " + a_nya[1].value +
		"<br>Jawaban No 3 : " + a_nya[2].value +
		"<br>Jawaban No 4 : " + a_nya[3].value +
		"<br>Jawaban No 5 : " + a_nya[4].value +
		"<br>Jawaban No 6 : " + a_nya[5].value +
		"<br>Jawaban No 7 : " + a_nya[6].value +
		"<br>Jawaban No 8 : " + a_nya[7].value +
		"<br>Jawaban No 9 : " + a_nya[8].value +
		"<br>Jawaban No 10 : " + a_nya[9].value +
		"<br>-------------------------------------------------<br>" +
		hasilakhir + hasilbenar + hasilsalah;

	 b = 0; s = 0;
};