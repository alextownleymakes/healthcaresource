

function init() {
    featuredJobs();
    exploreLocations();
}

function featuredJobs(f) {

    var fjc = document.getElementById('featured-jobs-container');

    var f = f;
    var jobs = [];
    for (var i = 0, f; f = featured[i]; ++i) {
       fjc.appendChild(renderFJC(f));
    }

}

function renderFJC(f) {
    var card = document.createElement('div');
    var cont = document.createElement('div');
    cont.className = 'featured-job card'

    card.className = 'col-lg-4 col-md-12 col-sm-12 col-xs-12';
    
    var title = document.createElement('a');
    title.className = 'title';
    title.innerHTML = f.title;
    
    var category = createP({i:'tag',p:'category',h:f.category});
    
    var department = createP({i:'sitemap',p:'department',h:f.department});
    
    var company = createP({i:'hospital',p:'company',h:f.company});

    var location = createP({i:'map-marker',p:'location',h:f.city + ', ' + f.state.toUpperCase() + ', ' + f.country});

    cont.appendChild(title);
    cont.appendChild(category);
    cont.appendChild(department);
    cont.appendChild(company);
    cont.appendChild(location);
    card.appendChild(cont);

    return card;
}

function createP(o) {
    var div = document.createElement('div');
    var i = document.createElement('i');
    var p = document.createElement('p');

    div.className = 'result-row';
    i.className = 'fas fa-' + o.i;
    p.className = o.p;
    p.innerHTML = o.p == 'pd' ? 'Posted: ' + o.h : o.h;

    if (o.p == 'pd'|| o.p == 'req') {null} else {div.appendChild(i);}
    div.appendChild(p);

    return div;
}

function exploreLocations(l) {

    var ec = document.getElementById('explore-container');

    var l = l;
    for (var i = 0, l; l = locations[i]; ++i) {
       ec.appendChild(renderEL(l,i));
    }

}

function renderEL(l,i) {

    var card = document.createElement('div');
    var body = document.createElement('div');
    var location = document.createElement('h5');
    var description = document.createElement('p');

    card.className = 'card explore-card row fltrt';

    card.style.backgroundImage = 'url("' + l.image + '")';
    location.innerHTML = l.location;
    description.innerHTML = l.description;

    var classStr;

    if (i % 2) {
        classStr = 'explore-body col-lg-5 col-md-5 col-sm-12 col-xs-12';
    } else {
        classStr = 'explore-body col-lg-5 col-md-5 col-sm-12 col-xs-12 fltrt';
    }

    body.className=classStr;

    body.appendChild(location);
    body.appendChild(description);
    card.appendChild(body);
    
    return card;

}

init();