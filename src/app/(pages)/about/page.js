
import { Route_Path } from "@/apis/api";
import { redirect } from "next/navigation";

const About = () => {
    redirect(Route_Path.ABOUT);
    return null;
};

export default About;
