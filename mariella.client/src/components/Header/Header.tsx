import SearchBox from "../../common/SearchBox/SearchBox";
import ButtonWithIcon from "../../common/ButtonWithIcon/ButtonWithIcon";
import {
    HeaderContainer,
    IconContainer,
    LogoContainer,
    StyledButtonContainer,
} from "./Header.Styles";
import { TFunction } from "i18next";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon/SvgIcon";

interface HeaderProps {
    t: TFunction;
}

const Header = ({ t }: HeaderProps) => {
    const iconSize = "20px";
    const buttonSize = "105px";

    const button = (text: string, src: string) => (
        <ButtonWithIcon
            width={buttonSize}
            icon={{
                src: src,
                width: iconSize,
                height: iconSize,
            }}
            fontSize="13px"
            text={t(text)}
        />
    );

    return (
        <HeaderContainer>
            <LogoContainer src="mariella.svg" />
            <SearchBox />
            <StyledButtonContainer>
                {button("Home", "home.svg")}
                {button("Explore", "explore.svg")}
                {button("My Progress", "progress.svg")}
                {button("Inbox", "inbox.svg")}
                <IconContainer>
                    <SvgIcon src="account.svg" height="25px" width="25px" />
                </IconContainer>
            </StyledButtonContainer>
        </HeaderContainer>
    );
};

export default withTranslation()(Header);
