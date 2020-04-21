import Styled from "styled-components";
import { supportsOrientationLockAsync } from "expo/build/ScreenOrientation/ScreenOrientation";

export const Header = Styled.View `
position:absolute;
z-index: 2;
top: 0px;
left:0px;
padding-top: 37px;
height: 110px;
width: 100%;
background-color: rgba(0, 0, 0, 0.3);
flex-direction: column;
opacity: ${props => props.showHeader? 1: 0}
`

export const TitleIconContainer = Styled.View`
flex-direction: row;
margin-top: 15px;
padding-left: 20px;
padding-right: 25px;
padding-bottom: 15px;
justify-content: space-between;
`;

export const TitleAvatarContainer = Styled.View`
flex-direction: row;
`;


export const IconsContainer = Styled.View`
flex-direction: row;
justify-content: center;
align-items: center
`
export const TitleContainer = Styled.View`
align-items: center;
justify-content: center;
margin-left: 15px
`

export const Title = Styled.Text`
color: #ffffff;
font-weight: 500;
font-size: 18px
`

export const ProgressBarContainer = Styled.View`
    width: 100%;
    height: 10px
`

export const StoryIndicator = Styled.View`
    height: 2.5px;
    backgroundColor: ${props => props.index<=props.currentIndex? '#ffffff' : "#555"};
    width: ${props=> props.scale}px;
    margin: 0 2px;
`
export const Avatar = Styled.Image`
  height: 34px;
  width: 34px;
  border-radius: 17px;
`;