import { Image } from '@chakra-ui/react';

export default function ThemedImage({ src, darkSrc, alt = "Icon", ...rest }) {
    // If no darkSrc is provided, fall back gracefully to the standard src
    const activeDarkSrc = darkSrc || src;

    return (
        <>
            <Image
                src={src}
                alt={alt}
                display={{ base: "block", _dark: "none" }}
                {...rest}
            />
            <Image
                src={activeDarkSrc}
                alt={alt}
                display={{ base: "none", _dark: "block" }}
                {...rest}
            />
        </>
    );
}
