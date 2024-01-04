import i18n from "i18next";
import Container from "../../../../common/Container/Container";
import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../../../common/SvgIcon/SvgIcon";
import {
    FooterSection,
    Title,
    NavLink,
    Extra,
    LogoContainer,
    Para,
    Large,
    Chat,
    Empty,
    FooterContainer,
    Language,
    Label,
    LanguageSwitch,
    LanguageSwitchContainer,
    Github,
} from "./Footer.Styles";

interface SocialLinkProps {
    href: string;
    src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
    const handleChange = (language: string) => {
        i18n.changeLanguage(language);
    };

    const SocialLink = ({ href, src }: SocialLinkProps) => {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                key={src}
                aria-label={src}
            >
                <SvgIcon src={src} width="25px" height="25px" />
            </a>
        );
    };

    return (
        <>
            <FooterSection>
                <Container>
                    <Row justify="space-between">
                        <Col lg={10} md={10} sm={12} xs={12}>
                            <Language>{t("Contacto")}</Language>
                            <Para>
                                {t(
                                    `¿Tienes alguna pregunta? No dude en contactarnos.`
                                )}
                            </Para>
                            <a href="support@mariellaapp.com">
                                <Chat>{t(`Envianos tus dudas`)}</Chat>
                            </a>
                        </Col>
                        <Col lg={8} md={8} sm={12} xs={12}>
                            <Title>{t("Open Source")}</Title>
                            <Github href="https://github.com/Falaxsa13/Mariella">
                                {t("Github Page")}
                            </Github>
                            <Large to="/">{t("¿Cómo contribuir?")}</Large>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Empty style={{ height: "40px" }} />
                            <Large to="/">{t("Centro de Soporte")}</Large>
                            <Large to="/">{t("Soporte de Cliente")}</Large>
                        </Col>
                    </Row>
                    <Row justify="space-between">
                        <Col lg={10} md={10} sm={12} xs={12}>
                            <Language>{t("Direccion")}</Language>
                            <Para>Rancho Santa Margarita</Para>
                            <Para>2131 Elk Street</Para>
                            <Para>Lima, Peru</Para>
                        </Col>
                        <Col lg={8} md={8} sm={12} xs={12}>
                            <Title>{t("Compañia")}</Title>
                            <Large to="/">{t("Acerca")}</Large>
                            <Large to="/">{t("Blog")}</Large>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Label htmlFor="select-lang">{t("Language")}</Label>
                            <LanguageSwitchContainer>
                                <LanguageSwitch
                                    onClick={() => handleChange("en")}
                                >
                                    <SvgIcon
                                        src="united-states.svg"
                                        aria-label="homepage"
                                        width="30px"
                                        height="30px"
                                    />
                                </LanguageSwitch>
                                <LanguageSwitch
                                    onClick={() => handleChange("es")}
                                >
                                    <SvgIcon
                                        src="spain.svg"
                                        aria-label="homepage"
                                        width="30px"
                                        height="30px"
                                    />
                                </LanguageSwitch>
                            </LanguageSwitchContainer>
                        </Col>
                    </Row>
                </Container>
            </FooterSection>
            <Extra>
                <Container border={true}>
                    <Row
                        justify="space-between"
                        align="middle"
                        style={{ paddingTop: "3rem" }}
                    >
                        <NavLink to="/">
                            <LogoContainer>
                                <SvgIcon
                                    src="mariella.svg"
                                    aria-label="homepage"
                                    width="101px"
                                    height="64px"
                                />
                            </LogoContainer>
                        </NavLink>
                        <FooterContainer>
                            <SocialLink
                                href="https://github.com/Falaxsa13/Mariella"
                                src="github.svg"
                            />
                            <SocialLink
                                href="https://twitter.com/MariellaCompany"
                                src="twitter.svg"
                            />
                            <SocialLink
                                href="https://www.linkedin.com/in/MariellaCompany/"
                                src="linkedin.svg"
                            />
                            <SocialLink
                                href="https://medium.com/@MariellaApp/"
                                src="medium.svg"
                            />
                        </FooterContainer>
                    </Row>
                </Container>
            </Extra>
        </>
    );
};

export default withTranslation()(Footer);
