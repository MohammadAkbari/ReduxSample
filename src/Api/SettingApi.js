import 'whatwg-fetch';

let SettingApi = {

    getPrivateInfo() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve({
                Name: "Mohammad",
                Family: "Akbari",
                Nickname: "Saleh",
                Emails: [],
                PhoneNumbers: []
            }), 1000);
        });

        return promise;
    }
};

export default SettingApi;