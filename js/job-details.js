var rsb;
var lr;

function init() {
    rsb = document.getElementById('related-sidebar');
    jobDetails(results[0]);
    relatedJobs();
}

function jobDetails(r) {
    lr = document.getElementById('details');
    lr.appendChild(renderJD(r));
}

function renderJD(o) {
    var cont = document.createElement('div');

    cont.className = 'result-card';
    var title = document.createElement('h3');
    title.className = 'result-title';
    title.innerHTML = o.t;
    var place = createP({i: 'map-marker', p: 'place', h: o.ci + ', ' + o.s.toUpperCase() + ', ' + o.co});
    var fac = o.fac ? createP({i: 'hospital', p: 'fac', h: o.fac}) : null;
    var sch = o.sch ? createP({i: 'clock', p: 'sch', h: o.sch}) : null;
    var req = o.req ? createP({i: null, p: 'req', h: 'Req #: ' + o.req}) : null;

    var pd = o.pd ? createP({i: 'calendar', p: 'pd', h: o.pd}) : null;
    var loc = o.loc ? createP({i: 'sitemap', p: 'loc', h: o.loc}) : null;
    var fam = o.fam ? createP({i: 'tag', p: 'fam', h: o.fam}) : null;

    title && cont.appendChild(title);
    place && cont.appendChild(place);
    fac && cont.appendChild(fac);
    loc && cont.appendChild(loc);
    sch && cont.appendChild(sch);
    fam && cont.appendChild(fam);
    req && cont.appendChild(req);

    pd && cont.appendChild(pd);

    return cont;
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

function relatedJobs() {
    let cont = document.getElementById('related-items');
    for (let i = 0, j; j = related[i]; ++i) {
        cont.appendChild(renderRJ(j));
    }
}

function renderRJ(o) {
    var row = document.createElement('div');
    var title = document.createElement('a');
    var loc = document.createElement('p');
    var i = document.createElement('i');

    row.className = "related-row";
    i.className = 'fas fa-map-marker';

    title.innerHTML = o.t;
    loc.innerHTML = o.c + ', ' + o.s.toUpperCase();

    row.appendChild(title);
    row.appendChild(i);
    row.appendChild(loc);

    return row;
}

init();
