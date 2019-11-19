
function themeSwap() {
	if(document.body.className === "lighttheme") {
		document.getElementById('themeswap').innerHTML = "Light Theme"
		document.body.classList.add('darktheme');
		document.body.classList.remove('lighttheme');
		document.getElementById('phone').classList.add('darkthemecontainer');
		document.getElementById('phone').classList.remove('lightthemecontainer');
		document.getElementById('mainpage').classList.add('darkthemecontainer');
		document.getElementById('mainpage').classList.remove('lightthemecontainer');
		document.getElementById('reportbarrier1').classList.add('darkthemecontainer');
		document.getElementById('reportbarrier1').classList.remove('lightthemecontainer');
		document.getElementById('reportbarrier2').classList.add('darkthemecontainer');
		document.getElementById('reportbarrier2').classList.remove('lightthemecontainer');
		document.getElementById('requesthelp').classList.add('darkthemecontainer');
		document.getElementById('requesthelp').classList.remove('lightthemecontainer');
		document.getElementById('profilepage').classList.add('darkthemecontainer');
		document.getElementById('profilepage').classList.remove('lightthemecontainer');
		document.getElementById('overview').classList.add('darkthemecontainer');
		document.getElementById('overview').classList.remove('lightthemecontainer');
	}
	else /*(document.body.className == 'darktheme')*/ {
		document.getElementById('themeswap').innerHTML = "Dark Theme"
		document.body.classList.add('lighttheme');
		document.body.classList.remove('darktheme');
		document.getElementById('phone').classList.add('lightthemecontainer');
		document.getElementById('phone').classList.remove('darkthemecontainer');
		document.getElementById('mainpage').classList.add('lightthemecontainer');
		document.getElementById('mainpage').classList.remove('darkthemecontainer');
		document.getElementById('reportbarrier1').classList.add('lightthemecontainer');
		document.getElementById('reportbarrier1').classList.remove('darkthemecontainer');
		document.getElementById('reportbarrier2').classList.add('lightthemecontainer');
		document.getElementById('reportbarrier2').classList.remove('darkthemecontainer');
		document.getElementById('requesthelp').classList.add('lightthemecontainer');
		document.getElementById('requesthelp').classList.remove('darkthemecontainer');
		document.getElementById('profilepage').classList.add('lightthemecontainer');
		document.getElementById('profilepage').classList.remove('darkthemecontainer');
		document.getElementById('overview').classList.add('lightthemecontainer');
		document.getElementById('overview').classList.remove('darkthemecontainer');
	}
}