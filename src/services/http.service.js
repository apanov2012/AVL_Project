import axios from "axios";
import { endPoint, authority } from "./config.url.json";

const http = axios.create({
    baseURL: configFile.apiCurrentEndpoint
});
export async function getReportCurrent(endpoint) {
    const response = await axios.get(`${endpoint}task/`, {
        params: {
            id: "633a8bb1b6920d0f94a4969f"
        },
        headers: {
            authority: authority.authorityCurrent,
            accept: "application/json, text/plain, */*",
            "accept-language": "en,ru;q=0.9,en-US;q=0.8,es;q=0.7",
            authorization:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NzExODc3NTYsImlhdCI6MTY3MTEwMTM1NiwibmJmIjoxNjcxMTAxMzU2LCJqdGkiOiI3MWUyOTg2Yi0zOTViLTRlYjAtOGRmNy04YTU2MjliYmViYTMiLCJpZGVudGl0eSI6ImFkbWluIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIiwidXNlcl9jbGFpbXMiOnsidWEiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNV83KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTA4LjAuMC4wIFNhZmFyaS81MzcuMzYiLCJpcCI6IjE3Mi4yNi4wLjEzIn19.YDZqsX6Hq2pMdylO09cWwcVNSvvyV7gJS4vIMkQ5M3c",
            "content-type": "application/json",
            "x-avl": "avl",
            "x-avl-project": "5b44bec321e80000100b37d8"
        }
    });
    console.log("response in SingleReport", response);
}

// const httpService = {
//     get: http.get,
//     post: http.post,
//     put: http.put,
//     delete: http.delete
// };
// export default httpService;
