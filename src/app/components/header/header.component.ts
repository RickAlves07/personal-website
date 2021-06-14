import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
	public navMenu: any;
	public navToggle: any;
	public navClose: any;
	public navLinkItems: any

	constructor() { }

	ngOnInit()
	{
		this.initHeaderComponents()
	}

	/**Inicializa os itens do header */
	initHeaderComponents()
	{
		this.navMenu = document.getElementById('nav-menu');
		this.navToggle = document.getElementById('nav-toggle');
		this.navClose = document.getElementById('nav-close');
		this.navLinkItems = document.querySelectorAll('.nav-link');
	}

	/**Exibe o menu para dispositivos mobiles */
	navToggleShowMenu()
	{
		this.navMenu.classList.add('show-menu');
	}

	/**Oculta o menu para dispositivos mobiles */
	navToggleCloseMenu()
	{
		this.navMenu.classList.remove('show-menu');
	}

	/**Quando clicar em um dos itens do menu, oculta o menu em dipositivei moveis*/
	navLinkClick()
	{
		this.navToggleCloseMenu();
	}
}
