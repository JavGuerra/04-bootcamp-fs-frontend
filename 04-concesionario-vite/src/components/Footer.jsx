import useConfig from '../hooks/useConfig';

const Footer = () => {

    const { footer } = useConfig();

    return (
        <footer>
            <p><small>{footer}</small></p>
        </footer>
    );
}

export default Footer;