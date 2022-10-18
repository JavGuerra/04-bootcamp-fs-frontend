import useConfig from '../hooks/useConfig';

const Header = () => {

    const { title } = useConfig();

    return (
        <header>
            <h1 className="colors">{title}</h1>
        </header>
    );
}

export default Header;