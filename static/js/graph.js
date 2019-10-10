queue()

    .defer(d3.json, "data/populationcountry.json")
    .await(makeGraphs);
function makeGraphs(error, populationcountryData) {

   var ndx = crossfilter(populationcountryData);

    show_discipline_selector(ndx);
    show_population_balance(ndx);
    show_specific_country(ndx);
    show_specific_continent(ndx);
    show_average_area(ndx);

    dc.renderAll();
}

function show_discipline_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('discipline'));
    var group = dim.group();


    dc.selectMenu("#discipline-selector")
        .dimension(dim)
        .group(group);
}





