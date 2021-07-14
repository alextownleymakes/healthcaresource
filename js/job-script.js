

function init() {

    let deptList = document.getElementById('dept-list');
    let cityList = document.getElementById('city-list');
    let stateList = document.getElementById('state-list');
    let famList = document.getElementById('fam-list');
    let facList = document.getElementById('fac-list');
    let schedList = document.getElementById('sched-list');
    let shiftList = document.getElementById('shift-list');


    let deptAcc = document.getElementById('dept-acc');
    let cityAcc = document.getElementById('city-acc');
    let stateAcc = document.getElementById('state-acc');
    let famAcc = document.getElementById('fam-acc');
    let facAcc = document.getElementById('fac-acc');
    let schedAcc = document.getElementById('sched-acc');
    let shiftAcc = document.getElementById('shift-acc');

    let listArr = [
        {
            l: deptList
            , a: deptAcc
        },
        {
            l:cityList
            , a:cityAcc
        },
        {
            l:stateList
            , a:stateAcc
        },
        {
            l:famList
            , a:famAcc
        },
        {
            l:facList
            , a:facAcc
        },
        {
            l:schedList
            , a:schedAcc
        },
        {
            l:shiftList
            , a:shiftAcc
        }
    ]

    for (let i = 0; i < listArr.length; ++i) {
        var a = listArr[i];
        var list = a.l;
        var acc = a.a;
        acc.addEventListener('click', (e) => {
            if (listArr[i].l.className == 'show-list') {
                listArr[i].l.className = '';
                listArr[i].a.innerHTML = '+';
            } else {
                listArr[i].a.innerHTML = '-';
                listArr[i].l.className = 'show-list';
            }
        })
    }

    departments(depts);
    jobResults({c: 1, t: 'working at woburn hospital', d: 'As a large and growing organization, we offer a full range of career option at every level of health care employment. We are a widely-respected teaching institution, with nationally known teachers and physicians. Doctors work with the latest in state-of-the-art medical technology and top-performing, highly-motivated support teams.'});
    listResults();
}

function departments(d) {

    var dc = document.getElementById('dept-list');

    var ul = document.createElement('ul');
    var dep = d;
    var jobs = [];
    for (var i = 0, d; d = dep[i]; ++i) {
       ul.appendChild(renderDepts(d));
    }

    dc.appendChild(ul);

}

function renderDepts(d) {

    var li = (d.c === '' ? document.createElement('div') : document.createElement('li'));
    li.className = 'dept-item';

    var dt = document.createElement('p');
    dt.innerHTML = d.d;

    var ds = document.createElement('span');
    ds.innerHTML = d.c;

    li.appendChild(dt);
    li.appendChild(ds);

    return li;

}

function jobResults(ob) {

    let o = ob || null;

    var ec = document.getElementById('results-container');

    let len = o.c || 0

    var l = l;
    for (var i = 0; i < len; ++i) {
    
        o ? o.image = locations[i].image : null;
        ec.appendChild(renderJR(o || locations[i],i));
    }

}

function renderJR(l,i) {

    var card = document.createElement('div');
    var body = document.createElement('div');
    var location = document.createElement('h5');
    var description = document.createElement('p');

    card.className = 'card job-results-card';

    card.style.backgroundImage = 'url("' + l.image + '")';
    location.innerHTML = l.t || l.location;
    description.innerHTML = l.d || l.description;

    (i % 2 ? body.style.marginLeft = '52%' : body.style.marginRight = '52%');
    body.className="results-body";

    body.appendChild(location);
    body.appendChild(description);
    card.appendChild(body);
    
    return card;

}

function listResults() {

    var lr = document.getElementById('list-results');
    for (var i = 0, r; r = results[i]; ++i) {
        lr.appendChild(renderLR(r));
    }
}

function renderLR(o) {
    var cont = document.createElement('div');
    var colL = document.createElement('div');
    var colR = document.createElement('div');

    colL.className = 'col-lg-6 col-md-6 col-sm-12 col-xs-12';
    colR.className = 'col-lg-6 col-md-6 col-sm-12 col-xs-12';
    cont.appendChild(colL);
    cont.appendChild(colR);

    cont.className = 'result-card row';
    var title = document.createElement('h3');
    title.className = 'result-title';
    var link = document.createElement('a');
    link.className = "result-link";
    link.innerHTML = o.t;
    var place = createP({i: 'map-marker', p: 'place', h: o.ci + ', ' + o.s.toUpperCase() + ', ' + o.co});
    var fac = o.fac ? createP({i: 'hospital', p: 'fac', h: o.fac}) : null;
    var sch = o.sch ? createP({i: 'clock', p: 'sch', h: o.sch}) : null;
    var req = o.req ? createP({i: null, p: 'req', h: 'Req #: ' + o.req}) : null;

    var btn = document.createElement('div');
    btn.className = 'btn btn-primary apply-now';
    btn.innerHTML = 'Apply Now';

    var pd = o.pd ? createP({i: 'calendar', p: 'pd', h: o.pd}) : null;
    var loc = o.loc ? createP({i: 'sitemap', p: 'loc', h: o.loc}) : null;
    var fam = o.fam ? createP({i: 'tag', p: 'fam', h: o.fam}) : null;

    link && title.appendChild(link);
    title && colL.appendChild(title);
    place && colL.appendChild(place);
    fac && colL.appendChild(fac);
    sch && colL.appendChild(sch);
    req && colL.appendChild(req);

    btn && colR.appendChild(btn);
    pd && colR.appendChild(pd);
    loc && colR.appendChild(loc);
    fam && colR.appendChild(fam);

    return cont;
}

function createP(o) {
    var div = document.createElement('div');
    var i = document.createElement('i');
    var p = document.createElement('p');

    div.className = o.p == 'pd' ? 'pdate result-row' : 'result-row';
    i.className = 'fas fa-' + o.i;
    p.className = o.p;
    p.innerHTML = o.h;

    o.p !== 'req' && div.appendChild(i);
    div.appendChild(p);

    return div;

}

function initMap() {
    const markers = [{lat: 32.8242404,lng:-117.3891684}, {lat: 33.7676338,lng: -84.5606891}, {lat: 32.8242404,lng: -117.3891684}, {lat: 61.1077052,lng: -150.0006904}, {lat:40.6971494,lng:-74.2598667}, {lat: 38.8936708, lng:-77.1546606}];
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {lat: 47.582787, lng: -102.049010},
    });
    let bounds = new google.maps.LatLngBounds();

    for( i = 0; i < markers.length; i++ ) {
        bounds.extend(markers[i])
        const marker = new google.maps.Marker({
            position: markers[i],
            map: map,
            title: i
        });
    }

    map.fitBounds(bounds);

}

init();
