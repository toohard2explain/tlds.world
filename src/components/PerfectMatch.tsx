import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {useRouter} from "next/router";
import TopLevelDomain, { TopLevelDomainInfo } from "@/TopLevelDomain";
import { TopLevelDomainPricingInfo } from "@/lib/TopLevelDomainPricingInfo";

interface PerfectMatchProps {
    domain: string;
}

export default class PerfectMatch extends React.Component<PerfectMatchProps> {
    domain: string = '';
    tldObject: TopLevelDomainInfo | undefined;

    constructor(props: PerfectMatchProps) {
        super(props);
        this.domain = this.props.domain;

        const tld = String(this.domain).split('.')[1];
        const tldObject: TopLevelDomainInfo | undefined = new TopLevelDomain().getTLDInfo(tld);

        if (!tldObject) return;

        this.tldObject = tldObject;
    }

    getDescription(): string {
        return this.tldObject?.description || '';
    }

    getTLD(): string {
        return this.tldObject?.name || '';
    }

    componentDidMount(): void {
        fetch('/api/collect/best').then((response) => {
            return response.json();
        }).then((json) => {
            const data: TopLevelDomainPricingInfo[] = json.best as TopLevelDomainPricingInfo[];

            data.forEach((item) => {
                if(item.tld.name === this.getTLD()) {
                    const priceNew = item.priceNew;
                    const registrar = item.registrar;
                    const registrarWebsite = item.registrarWebsite;

                    const priceObject = document.getElementById('perfect-pricing')!;
                    const registrarObject = document.getElementById('perfect-registrar')!;

                    priceObject.innerHTML = priceNew + '€';
                    registrarObject.innerHTML = registrar;
                    registrarObject.setAttribute('href', 'https://' + registrarWebsite);
                }
            });
        });
    }

    render()  {
        return (
            <div
                className="bg-gray-100 border border-gray-300 py-4 px-6 rounded-xl animate__animated animate__fadeInUp"
            >
                <div
                    className="flex justify-between text-green-500"
                >
                    <p
                        className="font-semibold"
                    >
                        Perfect match
                    </p>
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-1" />
                </div>

                <div
                    className="flex justify-between mt-3"
                >
                    <div>
                        <p
                            className="font-bold text-lg"
                        >
                            {this.props.domain}
                        </p>
                        <p
                            className="text-gray-500 text-sm"
                        >
                            (.{this.getTLD()}) {this.getDescription()}
                        </p>
                    </div>
                    <div>
                        <p
                            className="text-xl font-extrabold"
                        >
                            <span id="perfect-pricing"></span>
                            <span
                                className="text-gray-500 text-sm font-normal"
                            >
                                /year
                            </span>
                        </p>
                        <p
                            className="text-gray-400 text-sm text-right"
                        >
                            at <a href="" className="underline" id="perfect-registrar"></a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}