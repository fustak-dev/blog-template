import { Box } from "../components/box.jsx";
import { Text } from "../components/text.jsx";

export function CodeEditor({ fileName = false, children }) {
    return (
        <>
            <Box
                tag="div"
                alignItems="center"
                backgroundColor="#fff"
                border="1px solid #000"
                borderTopLeftRadius="4px"
                borderTopRightRadius="4px"
                display="flex"
                height="32px"
                lineHeight=".9"
                marginTop="16px"
                padding="0 12px"
            >
                <Box
                    tag="span"
                    backgroundColor="#808080"
                    borderRadius="50%"
                    display="flex"
                    width="12px"
                    height="12px"
                >
                    {""}
                </Box>
                <Box
                    tag="span"
                    backgroundColor="#c1c1c1"
                    borderRadius="50%"
                    display="flex"
                    marginLeft="8px"
                    width="12px"
                    height="12px"
                >
                    {""}
                </Box>
                <Box
                    tag="span"
                    backgroundColor="#9d9d9d"
                    borderRadius="50%"
                    display="flex"
                    marginLeft="8px"
                    width="12px"
                    height="12px"
                >
                    {""}
                </Box>
                {fileName ? (
                    <Box
                        tag="span"
                        alignItems="center"
                        backgroundColor="#fff"
                        borderBottom="1px solid #fff"
                        borderLeft="1px solid #000"
                        borderRight="1px solid #000"
                        display="flex"
                        fontSize="12px"
                        height="32px"
                        margin="1px 0 -1px 12px"
                        padding="0 12px"
                    >
                        {fileName}
                    </Box>
                ) : (
                    ""
                )}
            </Box>
            <div className="js-copy-to-clipboard-container relative">
                <Text
                    tag="pre"
                    border="1px solid #000"
                    borderTop="none"
                    borderBottomLeftRadius="4px"
                    borderBottomRightRadius="4px"
                    margin="0"
                >
                    <Text tag="code" backgroundColor="#fff" margin="0">
                        {children}
                    </Text>
                </Text>
                {/* <CopyToClipboard /> */}
            </div>
        </>
    );
}
