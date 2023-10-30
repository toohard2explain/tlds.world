import { TopLevelDomainInfo } from "@/TopLevelDomain";

export default interface Collector {
    name: string;
    website: string;
    tlds: TopLevelDomainInfo[];
    data: any[];

    collect(): void;
}