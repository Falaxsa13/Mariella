import SearchBox from "../../common/SearchBox/SearchBox";
import ButtonWithIcon from "../../common/ButtonWithIcon/ButtonWithIcon";
import { HeaderContainer, IconContainer } from "./Header.Styles";
import { SvgIcon } from "../../common/SvgIcon/SvgIcon";
import { TFunction } from "i18next";
import { withTranslation } from "react-i18next";

interface HeaderProps {
    t: TFunction;
}

const Header = ({ t }: HeaderProps) => (
    <HeaderContainer>
        <IconContainer src="mariella.svg" />
        <SearchBox />
        <ButtonWithIcon
            icon={{
                src: "home.svg",
                width: "30px",
                height: "30px",
            }}
            text={t("Home")}
        />
        <ButtonWithIcon
            icon={{
                src: "explorer.svg",
                width: "30px",
                height: "30px",
            }}
            text={t("Explore")}
        />
        <ButtonWithIcon
            icon={{
                src: "progress.svg",
                width: "30px",
                height: "30px",
            }}
            text={t("My Progress")}
        />
        <ButtonWithIcon
            icon={{
                src: "inbox.svg",
                width: "30px",
                height: "30px",
            }}
            text="Inbox"
        />
    </HeaderContainer>
);

export default withTranslation()(Header);
