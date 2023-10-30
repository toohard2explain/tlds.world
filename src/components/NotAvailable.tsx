import { faArrowUpRightFromSquare, faCheckCircle, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {useRouter} from "next/router";
import TopLevelDomain, { TopLevelDomainInfo } from "@/TopLevelDomain";

interface NotAvailableProps {
    domain: string;
  }

export default class NotAvailable extends React.Component<NotAvailableProps> {
    domain: string = '';
    tldObject: TopLevelDomainInfo | undefined;

    constructor(props: NotAvailableProps) {
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

    render()  {
        return (
            <div
                className="bg-gray-100 border border-gray-300 py-4 px-6 rounded-xl"
            >
                <div
                    className="flex justify-between text-red-500"
                >
                    <p
                        className="font-semibold"
                    >
                        Not available
                    </p>
                    <FontAwesomeIcon icon={faCircleXmark} className="mt-1" />
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
                            className="text-sm text-gray-400"
                        >
                            Want some info?
                        </p>
                        <a
                            href={'https://digga.dev/lookup/' + this.props.domain}
                            className=" font-extrabold text-xl text-right hover:underline"
                            target="_blank"
                        >
                            Visit digga.dev <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mb-2 ml-0.5 text-gray-400 text-xs" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}