"use strict";

let numberOfFilms;

// 4. numberOfFilms-ը պետք ա լինի ՄԻԱՅՆ ԹԻՎ, եթե թիվ չի while-ով էնքան անել, որ յուզեռը թիվ գրի
function start() {
	numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	while (isNaN(numberOfFilms) || numberOfFilms == null || numberOfFilms == "" || numberOfFilms < 1) {
		alert(`Անհրաժեշտ է մուտք անել 0-ից բարձր թիվ !!!`);
		numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false	
};

function rememberMyFilms () {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
		const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");
	
		if (a != null && b != null && a.trim() != "" && b.trim() != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("DONE");
		} else {
			console.log("ERROR");
			i--;
		}
	}
}

rememberMyFilms();

function detectUserPersonalLevel () {
	if (numberOfFilms < 10) {
		console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
	} else if (numberOfFilms < 30) {
		console.log("Դուք ֆիլմի սիրահար եք");
	} else {
		console.log("Դուք Կինոման եք !!!");
	}
}

detectUserPersonalLevel();

// 1․ գլխավոր օբջեքթի մեջ ստեղծել showMyDB մեթոդ, որը կստուգի privat-ը, 
//եթե լինի false ապա գլխավոր օբջեքթը չպետք ա կոնսոլ լինի, եթե true ապա պետք ա կոնսոլ լինի	
function showMyDB() {
	return personalMovieDB.privat === false ? `Տվյալների բազան փակ է!` : personalMovieDB;
}

showMyDB();

// 2․ գլխավոր օբջեքթի մեջ ստեղծել yourFavoriteGenres մեթոդ, որի մեջ յուզեռը պետք ա երեք անգամ պատասխանի 
	// այս հարցին ՝ « Ձեր նախընտրելի ժանրը» ու կողքից գրվի հարցի թիվը, այսինքն առաջին հարցը կլինի 1, երկրորդ 
	// հարցը կլինի 2, երրորդ հարցը կլինի 3, ու էդ ամեն ինչը պետք ա գրեք genres անունով զանգվածի մեջ
function yourFavoriteGenres() {
	for (let i = 0; i < 3; i++) {
		const favGenre = prompt(`${i + 1}. Ձեր նախընտրելի ժանրը`, "");
		
		// 3․ պետք ա ներկայիս կոդը օպտիմիզացնեք ու ձեր ստեղծած մեթոդները դնեք ստուգման տակ, որպեսզի յուզեռը չկարողանաք ոչ 
		// քենսլ անի, ոչ դատարկ վալյու ուղարկի ոչ էլ 20ից շատ տառ

		if (favGenre != null && favGenre.trim() != "" && favGenre.length <= 20) {
			personalMovieDB.genres[i] = favGenre;
			console.log("OK with name of genre");
		} else {
			console.log("ERROR with name of genre");
			i--;
		}
	}
}
yourFavoriteGenres();

console.log(personalMovieDB.genres);








