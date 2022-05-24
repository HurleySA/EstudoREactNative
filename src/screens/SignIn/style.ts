import styled from 'styled-components/native';

interface ITextProps {
  blue?: boolean;
}

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 0px 50px;
  justify-content:space-around ; 
`
const Image = styled.Image`
  width: 100%;
  height: 250px;
`
const ContainerInformations = styled.View` 
`

const ContainerTexts= styled.View`
  justify-content: space-between;
  margin-bottom: 50px;
`

const StyledText = styled.Text<ITextProps>`
  font-size: 30px;
  font-weight: 600;
  color: ${props => (props.blue ? '#4088FF' : '#000000')};
`

const DescriptionText = styled.Text`
  font-size: 15px;
  color: #968e8e;
`

const ContainerNavigation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #4088FF;
  border-radius: 50px;
`

const ButtonText = styled.Text`
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 500;
`

export { StyledText, Container, Image, ContainerInformations, ContainerTexts, DescriptionText, ContainerNavigation, Button, ButtonText };

