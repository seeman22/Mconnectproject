import instance from "./Axios";
import axios from "./Axios";

export const logingateway=(data:FormData)=>{
    return axios.post('/mpd_api/login',data)
}
export const FailureReport=(data:FormData,page:number,size:number)=>{
    return axios.post(`/mpd_api/report/failureAnalysisReport?page=${page}&size=${size}`,data);
}
export const notificationlistReport=(data:FormData,page:number,size:number)=>{
    return axios.post(`/mpd_api/report/NotificationHistoryReport?page=${page}&size=${size}`,data);
}