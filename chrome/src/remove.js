(function () {
  document.querySelector('h1#d_page_title').style.display = 'none';
  document.querySelector('div.dtb_c').style.display = 'none';
  document.querySelector('div.dab_c').style.display = 'none';
  document.querySelector('h2.dhdg_1').style.display = 'none';
  document.querySelector('table.dsearch').style.display = 'none';

  var hasFrames = frames.length > 0;

  var navDoc = hasFrames ? frames['nav'].document : document;

  var title = navDoc.querySelector('div.d_nb_c3').querySelector('div.d_nb_mt').innerHTML;
  if (title !== undefined) {
    document.title = title.match( /[A-Z]{4}-[0-9]{3}/ )[0].replace('-', ' ');
  } else {
    document.title = "My Courses";
  }


  var homeLink = navDoc.querySelectorAll('div.d_nb_c2 li')[0];
  homeLink.querySelector('a span').innerHTML = 'My Courses';

  var ul = navDoc.querySelector('div.d_nb_c4 ul');
  ul.insertBefore(homeLink, ul.firstChild);

  navDoc.querySelector('div.d_nb_c2').style.display = 'none';
  navDoc.querySelector('div.d_nb_c3').style.display = 'none';
}());
