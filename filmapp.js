"use strict";

// 4. numberOfFilms-ը պետք ա լինի ՄԻԱՅՆ ԹԻՎ, եթե թիվ չի while-ով էնքան անել, որ յուզեռը թիվ գրի
let numberOfFilms;
while(isNaN(numberOfFilms) || numberOfFilms == null || numberOfFilms == "" || numberOfFilms < 1) {
	numberOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "");
	if(isNaN(numberOfFilms) || numberOfFilms == null || numberOfFilms == "") {
		alert(`Անհրաժեշտ է մուտք անել 0-ից բարձր թիվ !!!`);
	}
}

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,

	// 1․ գլխավոր օբջեքթի մեջ ստեղծել showMyDB մեթոդ, որը կստուգի privat-ը, 
	//եթե լինի false ապա գլխավոր օբջեքթը չպետք ա կոնսոլ լինի, եթե true ապա պետք ա կոնսոլ լինի
	showMyDB() {
		return personalMovieDB.privat === false ? `Տվյալների բազան փակ է!` : `${personalMovieDB}`;
	},
	// 2․ գլխավոր օբջեքթի մեջ ստեղծել yourFavoriteGenres մեթոդ, որի մեջ յուզեռը պետք ա երեք անգամ պատասխանի 
	// այս հարցին ՝ « Ձեր նախընտրելի ժանրը» ու կողքից գրվի հարցի թիվը, այսինքն առաջին հարցը կլինի 1, երկրորդ 
	// հարցը կլինի 2, երրորդ հարցը կլինի 3, ու էդ ամեն ինչը պետք ա գրեք genres անունով զանգվածի մեջ
	yourFavoriteGenres() {
		for (let i = 0; i < 3; i++) {
			const favGenre = prompt(`${i + 1}. Ձեր նախընտրելի ժանրը`, "");
			
			// 3․ պետք ա ներկայիս կոդը օպտիմիզացնեք ու ձեր ստեղծած մեթոդները դնեք ստուգման տակ, որպեսզի յուզեռը չկարողանաք ոչ 
			// քենսլ անի, ոչ դատարկ վալյու ուղարկի ոչ էլ 20ից շատ տառ			
			if (favGenre == null || favGenre == "" || favGenre.length > 20 || favGenre.indexOf(' ') >= 0) {
				console.log("ERROR with name of genre");
				i--;
			} else {
				personalMovieDB.genres[i] = favGenre;
				console.log("OK with name of genre");
			}
		}
	}
};

// *** Այս մասը փոփոխել եմ ***
/* if ( numberOfFilms == null ||  numberOfFilms === 0 || numberOfFilms < 0  || numberOfFilms == "" ) {
	console.log("Տեղի է ունեցել անհայտ խնդիր");
} else {
	if (numberOfFilms < 10) {
		console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
	} else if (numberOfFilms < 30) {
		console.log("Դուք ֆիլմի սիրահար եք");
	} else if (numberOfFilms >= 30) {
		console.log("Դուք Կինոման եք !!!");
	}
} */

if (numberOfFilms < 10) {
	console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
} else if (numberOfFilms < 30) {
	console.log("Դուք ֆիլմի սիրահար եք");
} else if (numberOfFilms >= 30) {
	console.log("Դուք Կինոման եք !!!");
}

for (let i = 0; i < 1; i++) {
	const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
	const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");

	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("OK");
	} else {
		console.log("ERROR");
		i--;
	}
}


console.log(personalMovieDB.showMyDB());
personalMovieDB.yourFavoriteGenres();
console.log(personalMovieDB.genres);








