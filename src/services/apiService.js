import axios from 'axios';

const states = [
    {
        "value": "All States",
        "key": "00"
    },
    {
        "value": "Johor",
        "key": "01"
    },
    {
        "value": "Kedah",
        "key": "02"
    },
    {
        "value": "Kelantan",
        "key": "03"
    },
    {
        "value": "Melaka",
        "key": "04"
    },
    {
        "value": "Negeri Sembilan",
        "key": "05"
    },
    {
        "value": "Pahang",
        "key": "06"
    },
    {
        "value": "Perak",
        "key": "08"
    },
    {
        "value": "Perlis",
        "key": "09"
    },
    {
        "value": "Pulau Pinang",
        "key": "07"
    },
    {
        "value": "Sabah",
        "key": "12"
    },
    {
        "value": "Sarawak",
        "key": "13"
    },
    {
        "value": "Selangor",
        "key": "10"
    },
    {
        "value": "Terengganu",
        "key": "11"
    },
    {
        "value": "W.Persekutuan (Kuala Lumpur)",
        "key": "14"
    },
    {
        "value": "W.Persekutuan (Labuan)",
        "key": "16"
    },
    {
        "value": "W.Persekutuan (Putrajaya)",
        "key": "16"
    }
]

const distance = (lat1, lon1, lat2, lon2) => {
    if ((lat1 === lat2) && (lon1 === lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        return dist * 1.609344;
    }
}

const getLocation = (apiData, callback) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude
            return prepareData(apiData, { lat: latitude, long: longitude }, callback)
        },
            () => {
                return prepareData(apiData, { lat: '', long: '' }, callback)
            }
        );
    } else {
        return prepareData(apiData, { lat: '', long: '' }, callback)
    }
}

const prepareData = (apiData, { lat = '', long = '' }, callback) => {
    var finalData = [];
    let no = 1;

    apiData.map(office => {
        let state = states.filter(state => state.key === office.ste)

        office['state'] = state.length > 0 ? state[0].value : '-'
        office['no'] = no;
        office['distance'] = '-';

        // User allowed to capture their location information
        if (lat !== '' && long !== '') {
            let distanceFromOffice = distance(lat, long, office['lat'], office['lon'])
            office['distance'] = distanceFromOffice >= 1 ? distanceFromOffice.toFixed(2) + ' KM' : (distanceFromOffice / 1000).toFixed(2) + ' Meter';
        }

        finalData.push(office)
        no++;
    });
    callback(finalData)
}

const ApiService = {
    getOfficeDetails(callback) {
        let data = {
            "ios": "100",
            "lan": "EN",
            "ver": "100"
        }
        axios.post('https://secure.kwsp.gov.my/m2/postBranchLocation', data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                mode: 'no-cors'
            }
        })
            .then(response => {
                getLocation(response.data.lis, callback)
            })
            .catch(err => {
                alert('API Error')
            })
    }
}

export default ApiService;
