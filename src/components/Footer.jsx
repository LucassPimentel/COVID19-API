import styledComponents from "styled-components";

const FooterStyle = styledComponents.footer`
margin-top: 2em;
height: 1vh;
display: flex;
justify-content: center;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <h3>
        {" "}
        <a
          href="https://meu-portfolio-inky.vercel.app/"
          target="blank"
        >
          Lucas Pimentel
        </a>{" "}
        &copy; 2022
      </h3>
    </FooterStyle>
  );
};

export default Footer;
