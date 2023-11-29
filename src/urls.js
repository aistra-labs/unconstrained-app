const BASE_URL = process.env.REACT_APP_BASE_URL;

export const URLS = {
    GOOGLE_SIGNIN: `${BASE_URL}/oauth2/authorization/google`,
    GET_COURSES: `${BASE_URL}/classroom/course`,
    GET_ASSIGNMENTS: (id, pageSize=4)=>`${BASE_URL}/classroom/course/${id}?pageSize=${pageSize}`,
    GET_CURATEDTOOLS: `${BASE_URL}/curated-tools/search`,
    GET_CURATEDTOOLS_FILTERS: `${BASE_URL}/curated-tools/filters`
}
