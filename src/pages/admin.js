import { Heading, Text, Authenticator } from "@aws-amplify/ui-react";

const formFields = {
    confirmVerifyUser: {
        confirmation_code: {
            labelHidden: false,
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
        },
    },
};

const components = {
    VerifyUser: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },

    ConfirmVerifyUser: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
};

export default function App() {
    return (
        <div className="h-[72vh] pt-20">

            <Authenticator
                formFields={formFields}
                components={components}
                hideSignUp={true}
            >
                {({ signOut, user }) => (
                    <main>
                        <h1>Hello {user.username}</h1>
                        <button onClick={signOut}>Sign out</button>
                    </main>
                )}
            </Authenticator>
        </div>

    );
}