interface AuthConfiguration {
    clientID: string,
    domain: string,
    options: any
}

export const myConfig: AuthConfiguration = {
    clientID: '1sAozsgPT2jDaDIvvIGCvaFxNGgFaAph',
    domain: 'markthompsonst45.auth0.com',
    options: {
        theme: {
            logo: '../assets/logo.png',
            primaryColor: '#c1343e'
        },
        languageDictionary: {
            title: 'Active Armadillo Login'
        }
    }
};