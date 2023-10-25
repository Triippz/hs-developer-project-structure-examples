import React, { useCallback, useState } from "react";
import { hubspot } from "@hubspot/ui-extensions";
import {
    Card,
    Text,
    Divider,
    Select,
    Form,
    Stack,
    ButtonRow,
} from "@hubspot/ui-extensions";
import {CompanyButton} from "@ui-components/src/button";

// @ts-ignore
hubspot.extend(({ runServerlessFunction }) => (
    <QuotesCard runServerless={runServerlessFunction} />
));

const QuotesCard = ({ runServerless }: any) => {
    const [quotes, setQuotes] = useState([]);

    // @ts-ignore
    const fetchRandomQuote = useCallback(async () => {
        try {
            console.log("Random quote requested ===>");
            const serverlessResponse = await runServerless({
                name: "get-data",
                payload: { operation: "fetchRandomQuote" },
            });
            console.log(serverlessResponse.context);
            setQuotes(serverlessResponse.context.quotesData);
        } catch (error) {
            console.error("Error executing serverless: ", error);
        }
    });

    // @ts-ignore
    const resetAll = useCallback(() => {
        setQuotes([]);
    });


    return (
        <Card>
            <Stack>
                <Text text="This card fetches quotes from ZenQuotes pubic API. Because, why not? Afterall, everyone needs a daily motivation, including sales team!" />
            </Stack>
            <Divider />
            {/* @ts-ignore */}
            <Form>
                <Stack>
                    <Select
                        label="Keywords"
                        name="keywords"
                        description="Select a keyword to get 3 quotes"
                        options={[
                            {
                                label: "😇 Dreams",
                                value: "dreams",
                            },
                            {
                                label: "🎉 Happiness",
                                value: "happiness",
                            },
                            {
                                label: "😎 Change",
                                value: "change",
                            },
                        ]}
                        onChange={() => {
                            /**/
                        }}
                    />
                    <ButtonRow>
                        <CompanyButton text="Get three quotes" />
                        <CompanyButton text="I'm feeling lucky" onClick={fetchRandomQuote} />
                        <CompanyButton text="Reset" onClick={resetAll} />
                    </ButtonRow>
                </Stack>
            </Form>

            {quotes.map((quote) => (
                <>
                    <Divider />
                    <Stack>
                        <Text format="markdown" text={`${quote.q}`} />
                        <Text format="markdown" text={`_${quote.a}_`} />
                    </Stack>
                </>
            ))}
        </Card>
    );
};

export default QuotesCard;