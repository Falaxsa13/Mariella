import { MainBox } from "./styles";
import Banner from "../Banner/Banner";
import University from "../University/University";

const UserInformation: React.FC = () => {
    return (
        <MainBox>
            <Banner />
            <University />
        </MainBox>
    );
};

export default UserInformation;
