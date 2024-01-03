import SearchBox from "../../common/SearchBox/SearchBox";
import ButtonWithIcon from "../../common/ButtonWithIcon/ButtonWithIcon";
import { HeaderContainer, IconContainer } from "./Header.Styles";
import { TFunction } from "i18next";
import { withTranslation } from "react-i18next";

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
            <IconContainer src="mariella.svg" />
            <SearchBox />
            {button("Home", "home.svg")}
            {button("Explore", "explore.svg")}
            {button("My Progress", "progress.svg")}
            {button("Inbox", "inbox.svg")}
        </HeaderContainer>
    );
};

export default withTranslation()(Header);
