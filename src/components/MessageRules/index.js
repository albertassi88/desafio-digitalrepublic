import { Div, Span } from "../MessageRules/style";

export default function MessageRules({message}) {
    return (
        <Div>
            <Span>{message}</Span>
        </Div>
    );
}