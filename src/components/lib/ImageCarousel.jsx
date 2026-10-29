import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Carousel, IconButton, Flex, Image } from "@chakra-ui/react";

/**
 * @param {{ images: Array<{ url: string, label: string }> }} props
 */
export default function ImageCarousel({ images }) {
    return (
        <Flex justify="center">
            <Carousel.Root slideCount={images.length} maxW="2xl" gap="4">
                <Carousel.Control justifyContent="center" gap="4" width="full">
                    <Carousel.PrevTrigger asChild>
                        <IconButton size="xs" variant="outline">
                            <ChevronsLeft />
                        </IconButton>
                    </Carousel.PrevTrigger>

                    <Carousel.ItemGroup width="full">
                        {Array.isArray(images) && images.map((image, index) => (
                            <Carousel.Item key={index} index={index}>
                                <Image
                                    aspectRatio="16/9"
                                    src={image.src}
                                    alt={image.label}
                                    w="100%"
                                    objectFit="contain"
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel.ItemGroup>

                    <Carousel.NextTrigger asChild>
                        <IconButton size="xs" variant="outline">
                            <ChevronsRight />
                        </IconButton>
                    </Carousel.NextTrigger>
                </Carousel.Control>

                <Carousel.Control justifyContent="center" gap="4">
                    <Carousel.Indicators bg={{ base: "tertiary", _dark: "gray.800" }}
                        _current={{
                            _light: { bg: "secondary" },
                            _dark: { bg: "white" },
                        }} />
                </Carousel.Control>
            </Carousel.Root>
        </Flex>
    )
}