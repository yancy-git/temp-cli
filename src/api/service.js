import fetch from "@/axios";

let service = {};
service.queryTaskNodePage = (data) => {
    return fetch.post('/node/queryTaskNodePage',data)
}

export default service;