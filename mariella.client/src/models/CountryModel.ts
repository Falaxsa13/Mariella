type Name = {
    common: string;
    official: string;
};

interface CountryModel {
    cca3: string;
    name: Name;
    flag: string;
}

export default CountryModel;
