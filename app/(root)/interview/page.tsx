import {getCurrentUser} from "@/lib/actions/auth.action";
import Agent from "@/components/Agent";

const Page = async () => {
    const user = await getCurrentUser();

    return (
        <>
            <h3>Interview Generation</h3>

            <Agent userName={user?.name} userId={user?.id} type="generate"/>
        </>
    )
}

export default Page;
