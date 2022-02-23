import { NextPage } from "next";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Saying from '../components/saying/saying'
import SideMenu from "../components/side-menu";
import { Container, Divider } from "semantic-ui-react";
import PageTitle from "../components/page-title";
import CustomLayout from "../components/custom-layout";
const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]

const WorldSayings: NextPage = ()=>{
    return(
        <CustomLayout>
            <PageTitle text="World's Sayings"></PageTitle>
            <Divider></Divider>
            <div className="space-y-16">
                <Saying></Saying>
                <Saying></Saying>
                <Saying></Saying>
                <Saying></Saying>
            </div>
        </CustomLayout>
    );
}

export default WorldSayings;