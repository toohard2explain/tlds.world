import { TopLevelDomainInfo } from "@/TopLevelDomain";
import { TopLevelDomainPricingInfo } from "./TopLevelDomainPricingInfo";

export default interface Collector {
    name: string;
    website: string;
    tlds: TopLevelDomainInfo[];
    data: any[];

    collect(): Promise<TopLevelDomainPricingInfo[]>;
}