export class AuthModel {
    public username: string = ''

    public password: string = ''
}

export class Profile {
    constructor() {}
    public username: string = ''
    
    public access: object = {}
}

export class Build {
    constructor() {}

    public images: string[] = []
    public data: any = [
        {
            url: "",
            name: "",
        }
    ]
}

export class Post {
    
}

export class Partner {
    public name: string = ''

    public description: string = ''

    public location: string = ''
}