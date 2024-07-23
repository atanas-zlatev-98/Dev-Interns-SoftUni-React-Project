export const requester = async (method,url,data) =>{
    const options = {};

    if(method !== 'GET'){
        options.method = method;
    }

    if(data){
        options.headers = {
            'Content-Type': 'application/json',
        }
        options.body = JSON.stringify(data);
    }

    const response =  await fetch(url,options);
    const result = await response.json();
 
    return result;
}

export const get = (url,data) => requester('GET',url,data);
