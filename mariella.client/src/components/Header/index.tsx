import { SvgIcon } from "../../common/SvgIcon";
import { HeaderContainer, IconContainer } from "./styles";
import SearchBox from "../../common/SearchBox";

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <IconContainer src="logo.svg" width="18px" height="" />
            <SearchBox />
        </HeaderContainer>
    );
};

export default Header;
