import { BASE_URL } from './../config';

export async function fetchPmcList(){
    var response = await fetch(`${BASE_URL}search?query='malaria' AND PUB_YEAR:['2010'+TO+'2017'] sort_cited:y&format=json&resulttype=lite`);
    var body = await response.json();
    let pubYearwithNumbers = {};
    console.log('body: ', body);
    if(body){
        body.resultList.result.map((pub) => {
            let year = pub.pubYear;
            if(pubYearwithNumbers[year]){
                pubYearwithNumbers[year]['y']++;
                if(pubYearwithNumbers[year]['citations'] < pub['citedByCount']){
                    pubYearwithNumbers[year]['citations'] = pub['citedByCount'];
                    pubYearwithNumbers[year]['title'] = pub['title'];
                }
            } else {
                pubYearwithNumbers[year] = {};
                pubYearwithNumbers[year]['y'] = 1; 
                pubYearwithNumbers[year]['citations'] = pub['citedByCount'];
                pubYearwithNumbers[year]['title'] = pub['title'];
            }
        })
        return pubYearwithNumbers
    }
}