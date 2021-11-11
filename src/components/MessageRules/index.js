import { Div, Span } from "../MessageRules/style";

export default function MessageRules({message}) {
    return (
        <Div>
            <Span data-testid="message">{message}</Span>
        </Div>
    );
}