import { NextPage } from "next";
import { Divider, Form, Input, TextArea } from "semantic-ui-react";
import PageTitle from "../components/page-title";
import CustomLayout from "../components/custom-layout";

const Say: NextPage = ()=>{
    return(
        <CustomLayout>
            <Form>
                <input className="font-serif sayingTitleInput font-bold" placeholder='Saying Headline' />
                <Divider></Divider>
                <textarea className="specialInput font-semibold" placeholder='Speak your wise mind' />
            </Form>
        </CustomLayout>
    );
}

export default Say;