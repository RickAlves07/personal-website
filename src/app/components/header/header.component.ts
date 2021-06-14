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

	initHeaderComponents()
	{
		this.navMenu = document.getElementById('nav-menu');
		this.navToggle = document.getElementById('nav-toggle');
		this.navClose = document.getElementById('nav-close');
		this.navLinkItems = document.querySelectorAll('.nav-link');
	}

	navToggleShowMenu()
	{
		this.navMenu.classList.add('show-menu');
	}

	navToggleCloseMenu()
	{
		this.navMenu.classList.remove('show-menu');
	}

	navLinkClick()
	{
		this.navToggleCloseMenu()
	}
}
