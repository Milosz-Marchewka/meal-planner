export type ValidationResult = {
    status: boolean,
    msg: string
}

type Rule = {
    regex: RegExp,
    msg: string
}

const passRules: Rule[] = [
    {regex: /.{8,}/, msg: "Your password should be atleast 8 characters."},
    {regex: /[A-Z]/, msg: "Your password should have atleast one uppercase letter."},
    {regex: /[0-9]/, msg: "Your password should have atleast one number."},
    {regex: /[!@#$%^&*()\-_=+\[\]{}|;:'",.?]/, msg: "Your password has to contain atleast one special character."}
];

const emailRules: Rule[] = [
    {regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, msg: "Incorrect email."}
]

export function validatePassword(password: string): ValidationResult{

    for(const rule of passRules){
        if(!rule.regex.test(password)) return {status: false, msg: rule.msg};
    }

    return {status: true, msg: ""};
}

export function validateEmail(email: string): ValidationResult{
    for(const rule of emailRules){
        if(!rule.regex.test(email)) return {status: false, msg:rule.msg};
    }

    return {status: true, msg:""};
}