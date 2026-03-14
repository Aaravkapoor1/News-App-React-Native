import { Body, Button, Left, ListItem, Right, Text, Thumbnail, View } from 'native-base';
import { Component } from 'react';
import TimeAgo from './time';

class DataItem extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress = () => {
      const {url, title} = this.data;
      this.props.onPress({url, title});
    }

    render() {
        return(
            <ListItem thumbnail>
              <Left>
                <Thumbnail
  square
  source={{
    uri: this.data && this.data.urlToImage
      ? this.data.urlToImage
      : "https://via.placeholder.com/150"
  }}
/>
              </Left>
              <Body>
                <Text numberOfLines={2}>{this.data.title}</Text>
                <Text note numberOfLines={2}>{this.data.description}</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>{this.data.source.name}</Text>
                    <TimeAgo time={this.data.publishedAt}/>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={this.handlePress}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
        );
    }
}

export default DataItem;