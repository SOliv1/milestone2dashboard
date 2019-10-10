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



function uniq(a, kf) {
    var seen = [];
    return a.filter(x => seen[kf(x)] ? false : (seen[kf(x)] = true));
}

barChart2.legendables = function() {
      var vals = uniq(Group2.all(), kv => kv.key[1]),
          sorted = vals.sort((a,b) => a.key[1] > b.key[1] ? 1 : -1);
          // or in X order: sorted = vals.sort((a,b) => a.key[0] - b.key[0]);
      return sorted.map(function(kv) {
                    return {
                        chart: barChart2,
                        name: kv.key[1],
                        color: barChart2.colors()(kv.key[1]) }; }) };


