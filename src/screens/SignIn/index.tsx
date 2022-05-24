import DeliveryImage from "../../../assets/delivery.png";
import { Button, ButtonText, Container, ContainerInformations, ContainerNavigation, ContainerTexts, DescriptionText, Image, StyledText } from './style';
export const SignIn = ({navigation}: any) => {
    return (
        <Container>
            <Image resizeMode='center' source={DeliveryImage} />
            <ContainerInformations>
              <ContainerTexts>
                  <StyledText>Order your</StyledText>
                  <StyledText>Favourite</StyledText>
                  <StyledText blue>Food</StyledText>
              </ContainerTexts>
              <DescriptionText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum harum laborum voluptas sapiente nemo sit ipsa quod repellat sequi.
              </DescriptionText>
            </ContainerInformations>
            <ContainerNavigation>
                <Button onPress={() => navigation.navigate('Menu')} >
                    <ButtonText>Order now</ButtonText>
                </Button>
            </ContainerNavigation>
        </Container>
    )
}