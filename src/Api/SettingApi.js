import 'whatwg-fetch';

let SettingApi = {

    getPrivateInfo() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve({
                Name: "Mohammad",
                Family: "Akbari",
                Nickname: "Saleh",
                Emails: [],
                PhoneNumbers: [{
                    phoneNumber: "09124176684", 
                    isPrimary: true, 
                    confirmed: true
                },
                {
                    phoneNumber: "09124176684", 
                    isPrimary: false, 
                    confirmed: true
                },{
                    phoneNumber: "09124176684", 
                    isPrimary: false, 
                    confirmed: false
                }]
            }), 1000);
        });

        return promise;
    }
};

export default SettingApi;