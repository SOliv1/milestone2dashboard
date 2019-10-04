queue()

    .defer(d3.csv, "data/populationcountry.csv")
    .await(makeGraphs);
function makeGraphs(error, populationcountryData) {

}

 