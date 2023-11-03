import { TopLevelDomainInfo } from "@/TopLevelDomain";

export type TopLevelDomainPricingInfo = {
  tld: TopLevelDomainInfo;

  priceNew: number;
  priceRenew: number;
  priceTransfer: number;

  registrar: string;
  registrarWebsite: string;
};
