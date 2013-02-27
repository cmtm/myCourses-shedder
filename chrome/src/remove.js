(function shedder() {

	//check to see if we're in a frame
	
	// there are frames "Discussion" and "Content"
	// there aren't any button when in the "home" of these 2 pages
	
	// Nav frame is in both
	navFrme = "/d2l/lp/navbars/navbars/frame.d2l"
	// Content frames
	sideFrme = "/d2l/lms/content/viewer/navigation_frame.d2l"
	contentFrme = "/d2l/lms/content/viewer/content_frame.d2l"
	// Discussion frames (there are others but they don't matter)
	discussionFrme = "/d2l/lms/discussions/messageLists/frame_right.d2l"
	
	localPath = window.location.pathname
	
	if (localPath == navFrme) {
		sheddNav();
	} else if ( localPath == sideFrme) {
		document.querySelectorAll('div.dco_c')[0].style.display = 'none';
		document.querySelectorAll('div.dco_c')[1].style.display = 'none';
	} else if (localPath == contentFrme) {
		document.querySelector('div.dab_c').style.display = 'none';
	} else if(localPath == discussionFrme) {
		document.body.setAttribute("rows","100%");
		document.body.setAttribute("cols","50%,50%");
	} else {
		// this means we are in a page with no frames
		// or a frame that we wish to ignore
		// In the former case, the code below cleans it up
		// In the latter, it fails but catches it's own exception
		try {
			// Top bar
			sheddNav();
			
			// page title
			document.querySelector('h1#d_page_title').style.display = 'none';
			// second title
			document.querySelector('div.dtb_c').style.display = 'none';
			document.querySelector('h2.dhdg_1').style.display = 'none';

		} catch(err) {}	
	}
}());

function sheddNav() {	
	// set window title to course code
	var title = document.querySelector('div.d_nb_c3').querySelector('div.d_nb_mt').innerHTML;
	
	try {
		document.title = title.match( /[A-Z]{4}-[0-9]{3}/ )[0].replace('-', ' ');
	
	
		// move home button
		var homeLink = document.querySelectorAll('div.d_nb_c2 li')[0];
		homeLink.querySelector('a span').innerHTML = 'My Courses';
		
		var ul = document.querySelector('div.d_nb_c4 ul');
		ul.insertBefore(homeLink, ul.firstChild);
	} catch(err) {}
	
	// hide the whole top bar
	document.querySelector('div.d_nb_c2').style.display = 'none';
	document.querySelector('div.d_nb_c3').style.display = 'none';
}