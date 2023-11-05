import {
  faArrowUpRightFromSquare,
  faCheckCircle,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRouter } from "next/router";
import TopLevelDomain, { TopLevelDomainInfo } from "@/TopLevelDomain";
import { TopLevelDomainPricingInfo } from "@/lib/TopLevelDomainPricingInfo";

interface AlternativeProps {
  domain: string;
  controller: AbortController;
}

export default class Alternative extends React.Component<AlternativeProps> {
  constructor(props: AlternativeProps) {
    super(props);
  }

  componentDidMount(): void {
    fetch("/api/collect/best")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const results = document.getElementById("content-results")!;
        const data: TopLevelDomainPricingInfo[] =
          json.best as TopLevelDomainPricingInfo[];

        if (!results) return;

        data.forEach((item) => {
          const domainWithoutTLD = this.props.domain.split(".")[0];

          const outerDiv = document.createElement("div");
          outerDiv.classList.add("flex", "justify-between", "py-2");

          const domainName = document.createElement("p");
          domainName.classList.add("text-xl", "font-semibold", "inline-flex");
          domainName.innerHTML = domainWithoutTLD + "." + item.tld.name;

          const price = document.createElement("div");
          const priceText = document.createElement("p");
          const yearly = document.createElement("span");
          priceText.innerHTML = item.priceNew + "€";
          yearly.innerHTML = "/year";
          yearly.classList.add("text-xs", "text-gray-400", "ml-1");
          price.classList.add("text-right");

          priceText.classList.add('cursor-help');

          priceText.setAttribute("data-tooltip-id", "my-tooltip");
          priceText.setAttribute("data-tooltip-content", "Renewal: " + item.priceRenew + "€ · Transfer: " + item.priceTransfer + "€");
          priceText.setAttribute("data-tooltip-place", "right");
          

          const provider = document.createElement("p");
          provider.classList.add("text-xs", "text-gray-400");
          provider.innerHTML =
            'at <a class="underline" href="https://' +
            item.registrarWebsite +
            '">' +
            item.registrar +
            "</a>";

          const free = document.createElement("span");
          free.classList.add("text-sm", "ml-2", "mt-2", "opacity-30");
          free.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="animate-spin"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"/></svg>';

          // put it together
          priceText.appendChild(yearly);
          price.appendChild(priceText);
          price.appendChild(provider);

          domainName.appendChild(free);

          outerDiv.appendChild(domainName);
          outerDiv.appendChild(price);

          results.appendChild(outerDiv);

          // check if its free
          const domainString = domainWithoutTLD + "." + item.tld.name;

          const controller = this.props.controller;
          const { signal } = controller;

          fetch("/api/useable/" + domainString, { signal })
            .then((response) => {
              return response.json();
            })
            .then((json) => {
              if (json.useable) {
                free.setAttribute("data-tooltip-id", "my-tooltip");
                free.setAttribute("data-tooltip-content", "The domain is free to register.");
                free.setAttribute("data-tooltip-place", "right");

                free.innerHTML =
                  '<svg xmlns="http://www.w3.org/2000/svg" height="1em" class="fill-green-600" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>';
              } else {
                free.setAttribute("data-tooltip-id", "my-tooltip");
                free.setAttribute("data-tooltip-content", "The domain is not free.");
                free.setAttribute("data-tooltip-place", "right");

                free.innerHTML =
                  '<svg xmlns="http://www.w3.org/2000/svg" height="1em" class="fill-red-600" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>';
              }

              free.classList.remove("opacity-30");
            })
            .catch((error) => {
              //console.error(error);
            });
        });

        stopLoading();
      });
  }

  render() {
    return (
      <div>
        <div className="bg-gray-100 border border-gray-300 py-5 px-6 rounded-xl animate__animated animate__fadeInUp">
          <div
            id="skeleton"
            className="animate__animated animate__flash animate__slower animate__infinite"
          >
            <div className="space-y-2 divide-y divide-gray-200">
              <div className="grid grid-cols-5 py-2">
                <div className="h-6 bg-slate-200 rounded col-span-2" />
                <div className="col-span-2" />
                <div className="h-10 bg-slate-200 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-5 py-2">
                <div className="h-6 bg-slate-200 rounded col-span-2" />
                <div className="col-span-2" />
                <div className="h-10 bg-slate-200 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-5 py-2">
                <div className="h-6 bg-slate-200 rounded col-span-2" />
                <div className="col-span-2" />
                <div className="h-10 bg-slate-200 rounded col-span-1" />
              </div>
            </div>
          </div>

          <div id="content-results"></div>
        </div>
      </div>
    );
  }
}

function stopLoading() {
  const skeleton = document.getElementById("skeleton")!;
  const content = document.getElementById("content-results")!;

  skeleton.classList.add("hidden");
}
