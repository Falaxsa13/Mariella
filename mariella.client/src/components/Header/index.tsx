import { SvgIcon } from "../../common/SvgIcon";
import SearchBox from "../../common/SearchBox";
import { HeaderContainer, IconContainer } from "./styles";

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <IconContainer src="logo.svg" width="" height="" />
            <SearchBox />
        </HeaderContainer>
    );
};

export default Header;
