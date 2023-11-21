import { images } from "../../components/images";
import { processResponse } from "../../utils";

export function getCuratedTools(token, successCb, body = {}, dispatch) {
    fetch("https://dev.api.unconstrained.work/curated-tools/search", {
        headers: {
            token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        method: 'POST'
    })
        .then(response => processResponse(response, dispatch))
        .then(result => successCb(result?.['curatedTools']))
        .catch(error => {
            console.log('error', error);
        });
}

const dataMap = [
    {
        "imageLink": images["resource-img2.svg"],
        "name": "Purpose",
        "key": "categories"
    },
    {
        "imageLink": images["resource-img1.svg"],
        "name": "Tool Type",
        "key": "toolTypes"
    },
    {
        "imageLink": images["resource-img3.svg"],
        "name": "User",
        "key": "userTypes"
    }
]

function transformFilterData(data) {
    return dataMap.map(el => {
        const newEl = { ...el, list: data[el.key].map((fl, i) => ({ id: i, platform: fl, isSelected: false })) };
        return newEl;
    })
}

export function getCuratedToolFilters(token, successCb, dispatch) {
    fetch("https://dev.api.unconstrained.work/curated-tools/filters", {
        headers: {
            token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(response => processResponse(response, dispatch))
        .then(result => successCb(transformFilterData(result)))
        .catch(error => {
            console.log('error', error);
        });
}
