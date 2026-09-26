import { Html, Head, Body, Container, Heading, Text, Hr } from '@react-email/components';

interface EmailTemplateProps {
  firstName: string;
  email?: string;
  message?: string;
}

export function EmailTemplate({ firstName, email, message }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body className="font-[var(--font-inter)] bg-[var(--color-black)] text-[var(--color-white)] p-3">
        <Container className="bg-[var(--color-white)] p-4 rounded-md">
          <Heading className="text-[var(--color-black)] mb-4">
            New Contact Form Submission
          </Heading>
          
          <Text className="text-sm text-[var(--color-black)] mb-2">
            <strong>From:</strong> {firstName}
          </Text>
          
          {email && (
            <Text className="text-sm text-[var(--color-black)] mb-2">
              <strong>Email:</strong> {email}
            </Text>
          )}
          
          <Hr className="my-4 border-[var(--color-gray-300)]" />
          
          {message && (
            <>
              <Text className="text-sm text-[var(--color-black)] mb-2">
                <strong>Message:</strong>
              </Text>
              <Text className="text-sm text-[var(--color-black)] leading-6">
                {message}
              </Text>
            </>
          )}
        </Container>
      </Body>
    </Html>
  );
}