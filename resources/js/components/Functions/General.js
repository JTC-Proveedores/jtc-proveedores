export function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
};


export function ajaxSendMail(names, email, message){
    return axios.post('/ajax-send-mail', {names, email, message} )
        .then(res => {
            let r = res.data;
            return r;
        });
}
