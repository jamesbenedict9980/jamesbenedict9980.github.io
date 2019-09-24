$(document).ready(function () {
    LoadMenu();
    LoadMenu2();
    LoadFooter();
});
function LoadMenu() {
    var commonTopNavbar = '<nav class="navbar navbar-default msi-bg-dark navbar-inverse">\
    <div class="container-fluid">\
            <img src="img/united-states-of-america-flag-icon-32.png" class="pull-right pt-3 ml-2">\
      <!-- Brand and toggle get grouped for better mobile display -->\
      <div class="navbar-header">\
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\
          <span class="sr-only">Toggle navigation</span>\
          <span class="icon-bar"></span>\
          <span class="icon-bar"></span>\
          <span class="icon-bar"></span>\
        </button>\
        <a href="index.html" class="navbar-brand"><img src="img/msi-dev-guide-logo.png" class="w-48"></a>\
      </div>\
      <!-- Collect the nav links, forms, and other content for toggling -->\
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\
        <ul class="nav navbar-nav msi-bg-dark navbar-inverse navbar-right pt-3 mr-3">\
          <li class="dropdown">\
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user-circle"></i> Resources<span class="caret"></span></a>\
            <ul class="dropdown-menu">\
              <li><a class="dropdown-item" href="https://getbootstrap.com" target="_blank">Get Bootstrap</a></li>\
              <li><a class="dropdown-item" href="https://www.w3schools.com" target="_blank">w3wchools.com</a> </li>\
              <li><a class="dropdown-item" href="https://developer.mozilla.org/" target="_blank">Mozilla Developer Network</a> </li>\
              <li role="separator" class="divider"></li>\
              <li><a class="dropdown-item" href="mailto:Stephen.Gaines@msisurfaces.com?Subject=Message%20from%20MSI%20UI/UX%20site" target="_top"><i class="fas fa-question-circle"></i> Help</a></li>\
            </ul>\
          </li>\
        </ul>\
      </div><!-- /.navbar-collapse -->\
    </div><!-- /.container-fluid -->\
  </nav>';
    $('#common-top-navbar').append(commonTopNavbar);
    }
    function LoadMenu2() {
        var bdsidebar = '<div class="col-12 col-xl bd-sidebar pr-0">\
        <form class="bd-search d-flex align-items-center">\
            <button class="btn btn-link bd-search-docs-toggle d-md-none p-0 ml-3" type="button" data-toggle="collapse" data-target="#bd-docs-nav" aria-controls="bd-docs-nav" aria-expanded="false" aria-label="Toggle docs navigation">\
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false">\
                    <title>Side Menu</title>\
                    <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path>\
                </svg>\
            </button>\
        </form>\
        <nav class="collapse bd-links" id="bd-docs-nav">\
            <div class="bd-toc-item active">\
            <h6 class="fw-bolder mt-2 bd-toc-link"><a href="application-dev-code-standards.html" class="dark-text">APPLICATIONS</a></h6>\
            <h6 class="fw-bolder bd-toc-link"><a href="nextgen-getting-started.html" class="dark-text">NEXTGEN</a></h6>\
                <h6 class="fw-bolder bd-toc-link"><a href="transitional-getting-started.html" class="dark-text">TRANSITIONAL</a></h6>\
                    <ul class="nav bd-sidenav">\
                        <li><a href="transitional-getting-started.html" class="">Getting Started</a></li>\
                        <div class="ml-3 b-line w-25"></div>\
                        <li><a href="transitional-alerts-dismissible.html">Alerts</a></li>\
                        <li><a href="transitional-badges-push-notification.html">Badges</a></li>\
                        <li><a href="transitional-basic-ui.html">Basic UI</a></li>\
						<li><a href="transitional-buttons.html">Buttons</a></li>\
						<li><a href="transitional-cards.html">Cards</a></li>\
						<li><a href="transitional-collapse.html">Collapse</a></li>\
						<li><a href="transitional-colors.html">Colors</a></li>\
						<li><a href="transitional-check-boxes.html">Check Boxes</a></li>\
						<li><a href="transitional-date-picker.html">Datepicker</a></li>\
						<li><a href="transitional-forms.html">Forms</a></li>\
						<li><a href="transitional-navigation.html">Navigation</a></li>\
						<li><a href="transitional-navigational-pills.html">Navigational Pills</a></li>\
						<li><a href="transitional-radio-buttons.html">Radio Buttons</a></li>\
                    </ul>\
                <div class="half-spacer"></div>\
                <h6 class="font-weight-bolder bd-toc-link"><a href="legacy--getting-started.html" class="w3-dark">LEGACY</a></h6>\
                <h6 class="font-weight-bolder bd-toc-link"><a href="universal-icons.html" class="">UNIVERSAL ICONS</a></h6>\
                <ul class="nav bd-sidenav">\
                    <li><a href="universal-icons.html">Font Awesome</a></li>\
                </ul>\
            <div class="half-spacer"></div>\
        </nav>\
    </div>';
        $('#common-sidebar').append(bdsidebar);
        }
        function LoadFooter() {
            var commonFooter = '<div class="card text-center navbar-dark msi-bg-dark">\
            <div class="card-body navbar-dark msi-bg-dark">\
                <h5 class="card-title text-white">UI UX Group</h5>\
                <p class="card-text text-white">Reach out if you have questions or need to open an issue.</p>\
                <button type="button" class="btn btn-outline-light"><a href="mailto:Stephen.Gaines@msisurfaces.com?Subject=Message%20from%20MSI%20UI/UX%20site" target="_top">Email Us</a></button>\
            </div>\
            <div class="card-footer text-muted">\
            Last updated: August 26, 2019\
        </div>\
    </div>';

    $('#common-footer').append(commonFooter);
}