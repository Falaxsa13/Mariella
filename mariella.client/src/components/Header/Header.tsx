import SearchBox from "../../common/SearchBox/SearchBox";
import ButtonWithIcon from "../../common/ButtonWithIcon/ButtonWithIcon";
import { HeaderContainer, IconContainer } from "./Header.Styles";
import { SvgIcon } from "../../common/SvgIcon/SvgIcon";
import { TFunction } from "i18next";
import { withTranslation } from "react-i18next";

interface HeaderProps {
    t: TFunction;
}

const Header = ({ t }: HeaderProps) => {
    return (
        <HeaderContainer>
            <IconContainer src="logo.svg" />
            <SearchBox />
            <ButtonWithIcon
                icon={{
                    src: "homeIcon.svg",
                    width: "30px",
                    height: "30px",
                }}
                text={t("Home")}
            />
            <ButtonWithIcon
                icon={{
                    src: "homeIcon.svg",
                    width: "30px",
                    height: "30px",
                }}
                text={t("Home")}
            />
            <ButtonWithIcon
                icon={{
                    src: "homeIcon.svg",
                    width: "30px",
                    height: "30px",
                }}
                text={t("Home")}
            />
            <ButtonWithIcon
                icon={{
                    src: "homeIcon.svg",
                    width: "30px",
                    height: "30px",
                }}
                text={t("Home")}
            />
        </HeaderContainer>
    );
};

export default withTranslation()(Header);
