import { forwardRef, HStack, StackProps, theme } from "@chakra-ui/react"
import { HashupIcon } from "../../../../Components/Icons/HashupIcon";

export const Header = forwardRef<StackProps, "div">(({ children, ...rest }, ref) => (
    <HStack boxShadow="0 0 10px rgba(255,255,255,0.3)" ref={ref} p=".5rem .5rem .5rem 1rem" bg={theme.colors.black} borderRight={`2px solid ${theme.colors.red[500]}`} alignSelf="flex-end" h="48px" {...rest}>
        <HashupIcon boxSize={6} />
        <HStack w="100%" justifyContent="space-between">
            {children}
        </HStack>
    </HStack>
));