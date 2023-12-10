async function getActivities() {
    try {
        const response = await fetch("https://www.strava.com/api/v3/athlete/activities?per_page=200&access_token=edfdde71691d697b3ab098390c8b61cab4c972b6"); 
        const data = await response.json(); 
        console.log(data); 
    } catch (error) {
        console.error('error fetching data',error); 
    }

}

function reAuthorize() {

}
getActivities(); 