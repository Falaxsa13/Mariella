import { SvgIcon } from "../../common/SvgIcon";
import SearchBox from "../../components/SearchBox";
import "./styles.css";

const Header: React.FC = () => {
    return (
        <header className="header">
            <SvgIcon
                className="icon-container"
                src="logo.svg"
                width=""
                height=""
            />
            <SearchBox />
        </header>
    );
};

export default Header;
