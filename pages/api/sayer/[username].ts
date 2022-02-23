import type { NextApiRequest, NextApiResponse } from "next";
import { Sayer } from "../../../types/Sayer";
import { Saying } from "../../../types/Saying";

export default function handler(req: NextApiRequest, res: NextApiResponse<Sayer>){
    const { username } = req.query;
    const sampleSayingData = {content: "Stormy is fucked", date: Date.now(), lovesCount: 15} as Saying;
    const sayer = {displayName: "Stormy", username: username, profilePicLink: "Great Image", sayings: [sampleSayingData]} as Sayer;
    res.status(200).send(sayer);
}