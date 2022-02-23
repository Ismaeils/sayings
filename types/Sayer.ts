import { Saying } from "./Saying";

export type Sayer = {
    displayName: string,
    username: string,
    profilePicLink: string,
    sayings: [Saying]
}