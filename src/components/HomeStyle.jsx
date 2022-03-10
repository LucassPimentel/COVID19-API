import styledComponents from "styled-components";

export const DivContainer = styledComponents.div`
height: 65vh;
width: 70vw;
background-color: #0D1117;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 10px;
box-shadow: 1px 1px 40px black;
border: 0.5em solid black;
`;
export const DivContainerCountries = styledComponents.div`
height: 35vh;
width: 65vw;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
color: white;
`;
export const DivContainerCountry = styledComponents.div`
background-color: #445760;
margin-left: 15px;
height: 200px;
width: 220px;
text-align: center;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 0.5em;
font-size: 1.2em;
border: 0.3em solid black;
transition: 0.8s;
cursor: default;

&&:hover {
border: 0.2em solid white;
transform: scale(1.1);
`;
export const DivContainerSelect = styledComponents.div`
display: flex;
flex-direction: column;
height: 110px;
text-align: center;
justify-content: center;
font-size: 1.2em;
`;
export const TitleStyle = styledComponents.h1`
background-color: #445760; 
padding: 0.2em;
border-radius: 5px;
color: white;
border: 1px solid white;
`;
export const DivContainerTitle = styledComponents.div`
display: flex;
width: 70vw;
justify-content: center;
align-items: center;
gap: 2em;
`;
export const DivContainerInfos = styledComponents.div`
background-color: #445760;
padding: 0.8em;
border-radius: 5px;
font-size: 1em;
color: white;
border: 1px solid white;
transition: 0.8s;

&&:hover {
    font-size: 1.07em;
}
`;
