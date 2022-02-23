import { NextPage } from "next";
import { Divider, Form, Input, TextArea } from "semantic-ui-react";
import PageTitle from "../components/page-title";
import CustomLayout from "../components/custom-layout";

const Say: NextPage = ()=>{
    return(
        <CustomLayout>
            <PageTitle text="Favorite Sayers"></PageTitle>
            <Divider></Divider>
            <div>Here lies all of the sayers you're into</div>
        </CustomLayout>
    );
}

export default Say;