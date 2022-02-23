import { NextPage } from "next";
import { Divider, Form, Input, TextArea } from "semantic-ui-react";
import PageTitle from "../components/page-title";
import CustomLayout from "../components/custom-layout";

const Say: NextPage = ()=>{
    return(
        <CustomLayout>
            <PageTitle text="Notebook"></PageTitle>
            <Divider></Divider>
            <div>Here lies all of your drafts; unpublished sayings</div>
        </CustomLayout>
    );
}

export default Say;