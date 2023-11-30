import { images } from "../../components/images";
import { URLS } from "../../urls";
import { processResponse } from "../../utils";

export function getCuratedTools(token, successCb, body = {}, dispatch) {
    fetch(URLS.GET_CURATEDTOOLS, {
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
        "imageLink": images["purpose_heading.png"],
        "name": "Purpose",
        "key": "categories"
    },
    {
        "imageLink": images["tool_type.png"],
        "name": "Tool Type",
        "key": "toolTypes"
    },
    {
        "imageLink": images["user_type.png"],
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
    fetch(URLS.GET_CURATEDTOOLS_FILTERS, {
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
