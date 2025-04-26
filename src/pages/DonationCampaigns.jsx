import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";


const DonationCampaigns = () => {
    const allCampaign = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto mt-40">
            <title>Winter Clothing Donation | Donation Campaigns</title>
            <h2 className="text-2xl font-semibold text-green-500">Bring Warmth to Every Heart This Winter</h2>
            <p className="text-lg text-justify my-4">
                As winter blankets Bangladesh with its chilling embrace, thousands are left vulnerable without the basic warmth of proper clothing. Join us in making a difference — one sweater, one blanket, one kind act at a time. Explore our active donation campaigns and help bring comfort, hope, and smiles to those who need it most. Every contribution, big or small, can light up a life this season.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-20">
                {
                    allCampaign.map(campaign => <CampaignCard campaign={campaign} key={campaign.id}></CampaignCard>)
                }
            </div>
        </div>
    );
};

export default DonationCampaigns;