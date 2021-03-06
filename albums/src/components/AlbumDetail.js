import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { thumbnail_image, title, artist, image, url } = album;
    const {
        thumbnail,
        headerContent,
        titleText,
        thumbnailContainer,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainer} >
                    <Image
                        style={thumbnail}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContent}>
                    <Text style={titleText}>{title}</Text>
                    <Text>{artist}</Text>
                </View>

            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button whenPressed={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 17
    },
    thumbnail: {
        height: 50,
        width: 50
    },
    thumbnailContainer: {
        justipyContent: 'center',
        alignItems: 'center',
        marginLeft: 4,
        marginRight: 7
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail;



