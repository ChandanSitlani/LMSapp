import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const ShowCard = (props) => (
  <Card>
    {props.name}
  </Card>
);

export default ShowCard;
