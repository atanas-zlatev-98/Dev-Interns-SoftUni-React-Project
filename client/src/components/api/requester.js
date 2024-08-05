import { getAccessToken } from "../../utils/authUtil";

export default async function requester(method, url, data) {
    const options = {};
  
    const accessToken = getAccessToken();
  
    if(accessToken){
      options.headers = {
          ...options.headers,
          'X-Authorization':accessToken,
      }
    }
  
    if (method !== "GET") {
      options.method = method;
    }
  
    if (data) {
      options.headers = {
          ...options.headers,
        "Content-Type": "application/json",
      };
      options.body = JSON.stringify(data);
    }
  
    const response = await fetch(url, options);

    if(response.status === 204){
      return;
    }
    
    const result = await response.json();
  
    if(!response.ok){
      throw result 
    }
  
    return result;
  }
  
export const get = (url,data) => requester('GET',url,data);
export const post = (url,data) =>requester('POST',url,data);
export const del = (url) =>requester('DELETE',url);
