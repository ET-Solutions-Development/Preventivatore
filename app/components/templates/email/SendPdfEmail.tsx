// React-email
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
    Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

// Variables
import { BASE_URL } from "@/lib/variables";

type SendPdfEmailProps = {
    invoiceNumber: string;
};

export default function SendPdfEmail({ invoiceNumber }: SendPdfEmailProps) {
    const logo = `${BASE_URL}/assets/img/logo.svg`;
    return (
        <Html>
            <Head />
            <Preview>
                Il tuo Preventivo #{invoiceNumber} è pronto per il download.
            </Preview>
            <Tailwind>
                <Body className="bg-gray-100">
                    <Container>
                        <Section className="bg-white border-black-950 my-10 px-10 py-4 rounded-md">
                            <Img
                                src={logo}
                                alt="ET logo"
                                width={50}
                                height={50}
                            />
                            <Heading className="leading-tight">
                                Ciao!
                            </Heading>
                            <Text>
                                Il tuo Preventivo #{invoiceNumber} è pronto per il
                                download.
                                Ti ringraziamo per averci scelto
                            </Text>
                            <Hr />
                            <Text>
                                <br />
                                ET Srl
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
