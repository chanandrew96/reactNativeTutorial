import React from "react";
import { IconButton, SimpleGrid, Icon, NativeBaseProvider } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

export default function AppDrawer() {
    const icons = [
        "bolt",
        "build",
        "cloud",
        "delivery-dining",
        "favorite",
        "music-note",
        "invert-colors-on",
        "navigation",
        "settings",
        "sports-esports",
        "shield",
        "photo-camera",
        "network-wifi",
        "nightlight-round",
        "flight",
        "extension",
        "duo",
        "album",
        "access-alarm",
        "forum",
    ];

    return <SimpleGrid columns={5} spacingY={4} spacingX={4}>
        {icons.map((icon) => (
            <IconButton
                borderRadius="full"
                colorScheme="indigo"
                variant="solid"
                p={4}
                icon={<Icon name={icon} as={MaterialIcons} size='sm' />}
            />
        ))}
    </SimpleGrid>
}