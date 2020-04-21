import Styled from "styled-components";
export const ToggleStory = Styled.View`
    position: absolute;
    bottom: 0;
    top: 0;
    left:0;
    right:0;
    flex: 1;
    flex-direction: row
`;
export const Touchable = Styled.View`
    flex: ${(props) => props.flex}
`;
export const StoryContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #DDDDDD
`;
