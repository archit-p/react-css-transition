import React from "react";
import TwitterIcon from "./Twitter";

export default function Footer() {
  return(
    <footer>
      <span className="svg-icon svg-icon-lg"><TwitterIcon /></span>{" "}<span><a href="https://twitter.com/thesysarch">@thesysarch</a></span>
    </footer>
  )
}
