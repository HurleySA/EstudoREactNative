
import Checkbox from 'expo-checkbox';
import { useState } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import CheeseBurger from "../../../assets/cheese-burguer.jpg";
import { Container, Image, Item, ItemCheckbox, ItemPhoto, ItemTitle, Title } from "./style";
export const Menu = () => {
    const [isChecked, setChecked] = useState(false);
    const screenWidth = Dimensions.get('window').width;
    const burguers = ["Beef Burguer", "Lah Burguer", "Big Lah Burguer", "X-tudo", "Completo Especial", "X-franbacon", "Beef Burguer", "Lah Burguer", "Big Lah Burguer", "X-tudo", "Completo Especial", "X-franbacon"]
    return(
        <Container>
            <Title>
                Today's Special food
            </Title>
            <ScrollView >                
            {
                burguers.map((burguer, index) => (
                    <View key={index} style={{marginBottom: 20}}>
                        
                            <Item>
                                <ItemPhoto>
                                    <Image resizeMode='center' source={CheeseBurger} />
                                </ItemPhoto>
                                <ItemTitle>
                                    <Text>
                                        {burguer}
                                    </Text>
                                </ItemTitle>
                                <ItemCheckbox>
                                    <Checkbox
                                    value={false}
                                    onValueChange={setChecked}
                                    color={isChecked ? '#4088FF' : undefined}
                                    />
                                </ItemCheckbox>
                            </Item>
                        
                    </View>
                    
                ))
            }
            </ScrollView>
            
            
            

        </Container>
    )
}