import {useCallback, useState} from "react";
import {Button, ButtonRow, Card, Divider, Form, hubspot, Stack, Text, Image} from "@hubspot/ui-extensions";

hubspot.extend(({ context, runServerlessFunction, actions }) => (
    <>
    </>
));

const DankMemeGenerator = ({ runServerless }) => {
    const [meme, setMeme] = useState({});

    // @ts-ignore
    const fetchRandomMeme = useCallback(async () => {
        try {
            console.log("Random meme requeste d ===>");
            const serverlessResponse = await runServerless({
                name: "get-meme"
            });
            console.log(serverlessResponse.context);
            setMeme(serverlessResponse.context);
        } catch (error) {
            console.error("Error executing serverless: ", error);
        }
    }, []);

    return (
        <Card>
            <Stack>
                <Text text="This card fetches memes!" />
            </Stack>
            <Divider />
            <Form>
                <Stack>
                    <ButtonRow>
                        <Button text="Fetch Random" onClick={fetchRandomMeme} />
                    </ButtonRow>
                </Stack>
            </Form>

            <Stack>
                <Text format="markdown" text={`${meme.name}`}  />
                <Image src={meme.url}/>
            </Stack>
        </Card>
    )
}

export default DankMemeGenerator;