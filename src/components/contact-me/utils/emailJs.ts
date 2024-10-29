export const createTemplateParams = (
    from_name: string,
    from_email: string,
    message: string,
    token: string
) => ({
    from_name,
    from_email,
    message,
    'g-recaptcha-response': token
})