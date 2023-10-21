import React from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../atoms/CarouselCardItem";
import data from "../../data/data";

const CarouselCards = ({ newData, addToCart }) => {
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
  layout="default"
  layoutCardOffset={9}
  ref={isCarousel}
  data={newData}
  renderItem={({ item }) => <CarouselCardItem item={item} addToCart={addToCart} />}
  sliderWidth={SLIDER_WIDTH}
  itemWidth={ITEM_WIDTH*1.1}
  useScrollView={true}
  loop={true}
  inactiveSlideOpacity={1}
  inactiveSlideScale={1}
  paddingTop={40}
  inactiveSlideShift={0}
  activeSlideAlignment="start"
  // addToCart prop should be passed down to CarouselCardItem if needed
  containerCustomStyle={{
    overflow: "visible",
    marginHorizontal: -20,
  }}
/>

    </View>
  );
};

export default CarouselCards;
