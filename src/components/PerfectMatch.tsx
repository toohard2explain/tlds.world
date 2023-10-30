import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {useRouter} from "next/router";
import TopLevelDomain, { TopLevelDomainInfo } from "@/TopLevelDomain";

export default class PerfectMatch extends React.Component {
    domain: string = '';
    tldObject: TopLevelDomainInfo | undefined;

    constructor(domain: string) {
        super(domain);
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

    render()  {
        return (
            <div
                className="bg-gray-100 border border-gray-300 py-4 px-6 rounded-xl"
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
                            29.99$
                            <span
                                className="text-gray-500 text-sm font-normal"
                            >
                                /year
                            </span>
                        </p>
                        <p
                            className="text-gray-400 text-sm text-right"
                        >
                            At <a href="https://namecheap.com" className="underline">namecheap.com</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}