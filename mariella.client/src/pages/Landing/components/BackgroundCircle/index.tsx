import React from "react";
import { CircleContainer } from "./styles";
import { SvgIcon } from "../../../../common/SvgIcon/SvgIcon";

interface BackgroundCircleProps {
    icon: string;
}

const BackgroundCircle: React.FC<BackgroundCircleProps> = ({ icon }) => {
    return (
        <CircleContainer>
            <SvgIcon src={icon} width="1000px" height="1000px" />
        </CircleContainer>
    );
};

export default BackgroundCircle;
