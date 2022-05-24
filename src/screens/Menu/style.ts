import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 0px 20px;
  align-items: center;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  padding: 10px 0px;
  flex-direction: row-reverse;
`

const Item = styled.View`
    background-color: #fafafa;
    height: 80px;
    width: 100%;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    padding: 5px;
`
const ItemPhoto = styled.View`
    border-radius: 8px;
    width: 35%;
    height: 100%;
`
const Image = styled.Image`
  border-radius: 8px;
  width: 100%;
  height: 100%;
`

const ItemTitle = styled.View`
    padding: 0px 10px ;
    width: 55%;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
`
const ItemCheckbox = styled.View`
    width: 10%;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
`



export { Container, Title, Item, ItemPhoto, Image, ItemTitle, ItemCheckbox };

