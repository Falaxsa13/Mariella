import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { useForm } from "../../../../common/utils/useForm";
import validate from "../../../../common/utils/validationRules";
import { Button } from "../../../../common/Button/Button";
import Block from "../Block/Block";
import Input from "../../../../common/Input/Input";
import TextArea from "../../../../common/TextArea/TextArea";
import { TFunction } from "react-i18next";
import {
    ContactContainer,
    FormGroup,
    Span,
    ButtonContainer,
} from "./ContactForm.Styles";

export interface ContactProps {
    title: string;
    content: string;
    id: string;
    t: TFunction;
}

export interface ValidationTypeProps {
    type: string;
}

const Contact = ({ title, content, id, t }: ContactProps) => {
    const { values, errors, handleChange, handleSubmit } = useForm(validate);

    const ValidationType = ({ type }: ValidationTypeProps) => {
        const ErrorMessage = errors[type as keyof typeof errors];
        return (
            <Zoom direction="left">
                <Span>{ErrorMessage}</Span>
            </Zoom>
        );
    };

    return (
        <ContactContainer id={id}>
            <Row justify="space-between" align="middle">
                <Col lg={12} md={11} sm={24} xs={24}>
                    <Slide direction="left" triggerOnce>
                        <Block title={title} content={content} />
                    </Slide>
                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                    <Slide direction="right" triggerOnce>
                        <FormGroup autoComplete="off" onSubmit={handleSubmit}>
                            <Col span={24}>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={values.name}
                                    onChange={handleChange}
                                />
                                <ValidationType type="name" />
                            </Col>
                            <Col span={24}>
                                <Input
                                    type="text"
                                    name="email"
                                    placeholder="Your Email"
                                    value={values.email || ""}
                                    onChange={handleChange}
                                />
                                <ValidationType type="email" />
                            </Col>
                            <Col span={24}>
                                <TextArea
                                    placeholder="Your Message"
                                    value={values.message || ""}
                                    name="message"
                                    onChange={handleChange}
                                />
                                <ValidationType type="message" />
                            </Col>
                            <ButtonContainer>
                                <Button name="submit">{t("Submit")}</Button>
                            </ButtonContainer>
                        </FormGroup>
                    </Slide>
                </Col>
            </Row>
        </ContactContainer>
    );
};

export default withTranslation()(Contact);
