import { faCheckCircle, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRouter } from "next/router";
import TopLevelDomain, { TopLevelDomainInfo } from "@/TopLevelDomain";
import { TopLevelDomainPricingInfo } from "@/lib/TopLevelDomainPricingInfo";

interface PremiumMatchProps {
  domain: string;
}

export default class PremiumMatch extends React.Component<PremiumMatchProps> {
  domain: string = "";
  tldObject: TopLevelDomainInfo | undefined;

  constructor(props: PremiumMatchProps) {
    super(props);
    this.domain = this.props.domain;

    const tld = String(this.domain).split(".")[1];
    const tldObject: TopLevelDomainInfo | undefined =
      new TopLevelDomain().getTLDInfo(tld);

    if (!tldObject) return;

    this.tldObject = tldObject;
  }

  getDescription(): string {
    return this.tldObject?.description || "";
  }

  getTLD(): string {
    return this.tldObject?.name || "";
  }

  componentDidMount(): void {
    fetch("/api/collect/best")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const data: TopLevelDomainPricingInfo[] =
          json.best as TopLevelDomainPricingInfo[];

        data.forEach((item) => {
          if (item.tld.name === this.getTLD()) {
            const priceNew = item.priceNew;
            const registrar = item.registrar;
            const registrarWebsite = item.registrarWebsite;

            const registrarBox = document.getElementById("registrarbox")!;
            const priceBox = document.getElementById("pricingbox")!;
            const priceYear = document.getElementById("pricingyear")!;
            const priceObject = document.getElementById("perfect-pricing")!;
            const registrarObject =
              document.getElementById("perfect-registrar")!;

            priceBox.classList.remove(
              "animate__flash",
              "animate__infinite",
              "animate__slower",
              "text-gray-300",
              "bg-gray-300",
            );
            priceYear.classList.remove("text-gray-300");

            registrarBox.classList.remove(
              "text-gray-200",
              "bg-gray-200",
              "animate__flash",
              "animate__infinite",
              "animate__slower",
            );

            priceObject.innerHTML = priceNew + "€";
            registrarObject.innerHTML = registrar;
            registrarObject.setAttribute("href", "https://" + registrarWebsite);
          }
        });
      });
  }

  render() {
    return (
      <div className="bg-gray-100 border border-gray-300 py-4 px-6 rounded-xl animate__animated animate__fadeInUp">
        <div className="flex justify-between text-yellow-500">
          <p className="font-semibold">Premium domain</p>
          <FontAwesomeIcon
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Premium domains can be more expensive than regular domains. Information about the price can be found at the various providers."
            data-tooltip-place="top"
            icon={faSackDollar}
            className="mt-1"
          />
        </div>

        <div className="flex justify-between mt-3">
          <div>
            <p className="font-bold text-lg">{this.props.domain}</p>
            <p className="text-gray-500 text-sm">
              (.{this.getTLD()}) {this.getDescription()}
            </p>
          </div>
          <div>
            <p
              id="pricingbox"
              className="text-xl font-extrabold animate__animated animate__flash animate__infinite animate__slower bg-gray-300 rounded text-gray-300"
            >
              <span id="perfect-pricing">0.00€</span>
              <span
                id="pricingyear"
                className="text-gray-500 text-sm font-normal text-gray-300"
              >
                /year
              </span>
            </p>
            <p
              className="text-gray-400 text-sm text-right text-gray-200 animate__animated animate__flash animate__infinite animate__slower bg-gray-200 rounded"
              id="registrarbox"
            >
              at <a href="" className="underline" id="perfect-registrar"></a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
