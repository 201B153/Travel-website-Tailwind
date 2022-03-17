import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Images
import sample_image1 from "../../images/sample_image.jpg";
import sample_image2 from "../../images/sample_image.jpg";
import sample_image3 from "../../images/sample_image.jpg";
import sample_image4 from "../../images/sample_image.jpg";
import sample_image5 from "../../images/sample_image.jpg";

const ExploreSectionContainer = tw(Element)`
    w-full
    h-screen
    flex
    flex-col
    relative
    pt-1
    pb-1
    xl:pt-2
    xl:pb-2
    items-center
`;

const Title = tw.h1`
    text-3xl
    xl:text-3xl
    2xl:text-5xl
    mt-6
    lg:mt-0
    2xl:mt-6
    2xl:mb-6
    text-gray-800
    font-bold
    text-center
`;

const SectionInfo = tw.p`
    text-base
    2xl:text-lg
    text-gray-700
    text-center
    mt-8
    2xl:mt-2
    max-w-lg
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-2
    lg:pr-2
`;

const ExploreSectionWrapper = tw.div`
    w-full
    h-full
    flex
    flex-col
    justify-center
    items-center
    mt-3
    xl:mt-6
    2xl:mt-10
    max-w-sm
    xl:max-w-2xl
    2xl:max-w-4xl
`;

const Item = styled.div`
  ${tw`
        flex
        flex-col
    `}

  img {
    ${tw`
            max-w-full
            max-h-full
        `}
  }
`;

const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;

export function ExploreSection() {
  return (
    <ExploreSectionContainer name="Explore">
      <Title>Headin2</Title>
      <SectionInfo>
        Project_details_2
      </SectionInfo>
      <ExploreSectionWrapper>
        <Carousel dynamicHeight={false}>
          <Item>
            <img src={sample_image1} />
            <Description>imgae_Slide_show1</Description>
          </Item>
          <Item>
            <img src={sample_image2} />
            <Description>imgae_Slide_show2</Description>
          </Item>
          <Item>
            <img src={sample_image3} />
            <Description>imgae_Slide_show3</Description>
          </Item>
          <Item>
            <img src={sample_image4} />
            <Description>imgae_Slide_show4</Description>
          </Item>
          <Item>
            <img src={sample_image5} />
            <Description>imgae_Slide_show5</Description>
          </Item>
        </Carousel>
      </ExploreSectionWrapper>
    </ExploreSectionContainer>
  );
}