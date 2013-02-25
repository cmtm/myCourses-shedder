(function shedder() {

	// structure docs
	// also hide objects if no frames
	if (frames.length > 0) {
		var navDoc = frames['nav'].document;
		var contentDoc = frames['content'].document;
		
		// check for deeper frames
		// detach sidebar if they exist
		if (frames['content'].frames.length > 0) {
			// improve discussion page
			if (frames['content'].frames[0].name == 'FRAME_right') {
				discussionDoc = frames['content'].frames[0].document;
				discussionDoc.body.setAttribute("rows","100%");
				discussionDoc.body.setAttribute("cols","50%,50%");
			} else {
				var sideBarDoc = frames['content'].frames['TOCFrame'].document;
				contentDoc = frames['content'].frames['ContentFrame'].document;
			}
		}
	} else {
		var navDoc = document;
		var contentDoc = document;
		
		// these objects only exist if there are no frames
		try {
			// page title
			contentDoc.querySelector('h1#d_page_title').style.display = 'none';
			// second title
			contentDoc.querySelector('div.dtb_c').style.display = 'none';
			contentDoc.querySelector('h2.dhdg_1').style.display = 'none';

		} catch(err) {}
	}
	
	// set window title to course code
	var title = navDoc.querySelector('div.d_nb_c3').querySelector('div.d_nb_mt').innerHTML;
	
	try {
		document.title = title.match( /[A-Z]{4}-[0-9]{3}/ )[0].replace('-', ' ');
	
	
		// move home button
		var homeLink = navDoc.querySelectorAll('div.d_nb_c2 li')[0];
		homeLink.querySelector('a span').innerHTML = 'My Courses';
		
		var ul = navDoc.querySelector('div.d_nb_c4 ul');
		ul.insertBefore(homeLink, ul.firstChild);
	} catch(err) {}
	
	// hide the whole top bar
	navDoc.querySelector('div.d_nb_c2').style.display = 'none';
	navDoc.querySelector('div.d_nb_c3').style.display = 'none';
	
	

	try{
	// clean up sidebar & content
	if ( typeof sideBarDoc != 'undefined') {
		sideBarDoc.querySelectorAll('div.dco_c')[0].style.display = 'none';
		sideBarDoc.querySelectorAll('div.dco_c')[1].style.display = 'none';
		
		contentDoc.querySelector('div.dab_c').style.display = 'none';
	}
	} catch (err) {}
}());