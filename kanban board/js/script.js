'use strict'

window.addEventListener('DOMContentLoaded', () => {
	

	

	// сделать потом функцию изменения названия листа универсальной, чтобы можно было еще и пункты менять.
	// то есть надо в функции использовать везде параметры, а уже потом при клике на нужный карандаш передавать значения




	// добавление пункта в карточке

	let addThis = document.querySelectorAll('.card__option-addthis .icon-addthis'),
		cardContent = document.querySelectorAll('.card__content');
	const parent = document.querySelector('.card__row');
	// let cardText = document.querySelectorAll('.card__text');
	
	
	function addText(j) {
		let div = document.createElement('div');
		div.classList.add('card__text');

		for (let i = 0; i < 1; i++) {
			let text = prompt('Введите название пункта', '').trim();
			if (text != null && text != '') {
				div.innerHTML = `<p>${text}</p>
						<div class="card__text-active">
							<div class="card__text-pencil"><span class="icon-pencil"></span></div>
							<div class="card__text-bin"><span class="icon-bin"></span></div>
						</div>`
				cardContent[j].append(div);
			} else {
				i--;
			}
		}
		renameText = document.querySelectorAll('.card__text-pencil .icon-pencil');
		name = document.querySelectorAll('.card__text p');
		deleteText = document.querySelectorAll('.card__text-bin .icon-bin');
		cardText = document.querySelectorAll('.card__text');
		return renameText, name, deleteText, cardText;
	}
	

	parent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.matches('.card__option-addthis .icon-addthis')) {
			addThis.forEach((item, j) => {
				if (target == item) {
					addText(j);
				}
			});
		}
	});


	// добавление новой карточки

	const globalAdd = document.querySelector('.global__option-addthis');
	let titleItem = document.getElementsByClassName('card__name');
	let liveCard = document.getElementsByClassName('card__item');
	let rename = document.querySelectorAll('.card__option-pencil .icon-pencil');
	let nameItem = document.querySelectorAll('.card__name');
	let binCard = document.querySelectorAll('.card__option-bin .icon-bin');
	let item = document.querySelectorAll('.card__item');
	let renameText = document.querySelectorAll('.card__text-pencil .icon-pencil');
	let name = document.querySelectorAll('.card__text p');

	

	function addNewList() {
		const newList = document.createElement('div');
	
		newList.classList.add('card__item');
		newList.innerHTML = `<div class="card__title">
								<div class="card__name">To do</div>
								<div class="card__option">
									<div class="card__option-addthis"><span class="icon-addthis"></span></div>
									<div class="card__option-pencil"><span class="icon-pencil"></span></div>
									<div class="card__option-bin"><span class="icon-bin"></span></div>
								</div>
							</div>
							<div class="card__content"></div>`
		
		parent.append(newList);
		rename = document.querySelectorAll('.card__option-pencil .icon-pencil');
		addThis = document.querySelectorAll('.card__option-addthis .icon-addthis');
		cardContent = document.querySelectorAll('.card__content');
		binCard = document.querySelectorAll('.card__option-bin .icon-bin');
		item = document.querySelectorAll('.card__item');
		nameItem = document.querySelectorAll('.card__name');
		name = document.querySelectorAll('.card__text p');
		return rename, addThis, cardContent, binCard, item, nameItem, name;
		
	}

	globalAdd.addEventListener('click', () => {
		
		for (let i = 0; i < 1; i++) {
			let name = prompt('Введите название листа', '').trim();
			if (name != null && name != '') {
				addNewList();
				titleItem[titleItem.length - 1].textContent = `${name}`;
			} 
		}
		
	});

	



	// изменение названия карточки

	
	// сделать эту функцию универсальной, чтобы можно было при постакновке нужных аргументов изменять еще и 
	// названия пунктов в карточке

	function renameItem(k) {
		for (let i = 0; i < 1; i++) {
			let name = prompt('Введите название листа', '').trim();
			if (name != null && name != '') {
				nameItem[k].textContent = `${name}`;
			} else {
				i--;
			}
		}
	}	


	parent.addEventListener('click', (event) => {
		const target = event.target;
		if (target && target.matches('.card__option-pencil .icon-pencil')) {
			rename.forEach((item, k) => {
				if (target == item) {
					rename = document.querySelectorAll('.card__option-pencil .icon-pencil');
					renameItem(k);
					
				}
			});
		}
	});





	// удаление карточки
	

	function deleteCArd(p) {
		for (let i = 0; i < 1; i++) {
			let name = confirm('Вы дейсвительно хотите удалить эту карточку?');
			if (name == true) {
				item[p].remove();
			}
		}
		binCard = document.querySelectorAll('.card__option-bin .icon-bin');
		item = document.querySelectorAll('.card__item');
		renameText = document.querySelectorAll('.card__text-pencil .icon-pencil');
		name = document.querySelectorAll('.card__text p');
		deleteText = document.querySelectorAll('.card__text-bin .icon-bin');
		cardText = document.querySelectorAll('.card__text');
		return binCard, item, renameText, name, deleteText, cardText;
	}

	parent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.matches('.card__option-bin .icon-bin')) {
			console.log('done');
			binCard.forEach((item, p) => {
				if (target == item) {
					deleteCArd(p);
				}
			});
		}
	});





// изменение названия пункта
	
	function renameCardText(k) {
		for (let i = 0; i < 1; i++) {
			let names = prompt('Введите новое название пункта', '').trim();
			if (name != null && name != '') {
				name[k].textContent = `${names}`;
			} else {
				i--;
			}
		}
	}

	parent.addEventListener('click', (event) => {
		const target = event.target;
		if (target && target.matches('.card__text-pencil .icon-pencil')) {
			renameText.forEach((item, k) => {
				if (target == item) {
					renameText = document.querySelectorAll('.card__text-pencil .icon-pencil');
					renameCardText(k);

				}
			});
		}


	});


	

	// удаление пункта в карточке

	let cardText = document.querySelectorAll('.card__text');
	let deleteText = document.querySelectorAll('.card__text-bin .icon-bin');


	function deleteCardText(k) {
		for (let i = 0; i < 1; i++) {
			let name = confirm('Вы дейсвительно хотите удалить эту карточку?');
			if (name == true) {
				cardText[k].remove();
			}
		}
		renameText = document.querySelectorAll('.card__text-pencil .icon-pencil');
		name = document.querySelectorAll('.card__text p');
		cardText = document.querySelectorAll('.card__text');
		deleteText = document.querySelectorAll('.card__text-bin .icon-bin');
		return renameText, name, cardText, deleteText;
	}



	parent.addEventListener('click', (event) => {
		const target = event.target;
		if (target && target.matches('.card__text-bin .icon-bin')) {
			deleteText.forEach((item, k) => {
				if (target == item) {
					console.log('done');
					// deleteText = document.querySelectorAll('.card__text-bin .icon-bin');
					deleteCardText(k);

				}
			});
		}

	});



});