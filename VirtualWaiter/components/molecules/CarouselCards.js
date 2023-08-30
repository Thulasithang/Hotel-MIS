import React from 'react'
import { View } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../atoms/CarouselCardItem'
import data from '../../data/data';

const CarouselCards = ({newData}) => {
  const isCarousel = React.useRef(null)

  return (
    <View>
      <Carousel
        layout= "default"
        layoutCardOffset={18}
        ref={isCarousel}
        data={newData}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={300}
        useScrollView={true}
        loop={false}
        inactiveSlideOpacity={1} // Reduce the opacity for inactive cards
  inactiveSlideScale={1} // Scale down the inactive cards
  paddingTop={40}
        />
    </View>
  )
}

export default CarouselCards;
