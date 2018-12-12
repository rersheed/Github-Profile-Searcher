import { User } from "../models/user.interface";

const userList: User[] = [
    {
        name: 'PaulHolliday',
        company: 'PWH',
        location: 'Durham, Uk',
        bio: 'I make videos on my fav tech. Go Angular!',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: 'paul@paul.com'
    },
    {
        name: 'JohnDoe',
        company: 'Doe and Co.',
        location: 'London, UK',
        bio: 'I love Ionic',
        avatar_url: 'http://i.imgur.com/TzWcihb.png',
        email: 'john@doe.com'
    }
]

export const USER_LIST = userList;