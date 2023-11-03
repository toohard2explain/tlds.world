import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRouter } from "next/router";
import TopLevelDomain, { TopLevelDomainInfo } from "@/TopLevelDomain";
import { TopLevelDomainPricingInfo } from "@/lib/TopLevelDomainPricingInfo";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default class GithubButton extends React.Component {
  getRepoUrl(): string {
    return "https://github.com/toohard2explain/tlds.world";
  }

  render() {
    return (
      <div className="absolute bottom-0 right-0 p-6">
        <a
          href={this.getRepoUrl()}
          target="_blank"
          className="p-3 bg-white rounded-xl border border-gray-300 hover:shadow flex"
        >
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5 m-auto" />
        </a>
      </div>
    );
  }
}
