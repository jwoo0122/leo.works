/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react");
exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      data-name="BMC-Widget"
      src="https://cdn.buymeacoffee.com/widget/1.0.0/prod/widget.prod.min.js"
      data-id="ND3fpug"
      data-description="Support me on Buy me a coffee!"
      data-message="Thank you for visiting. You can now buy me a coffee!"
      data-color="#FF813F"
      data-position="right"
      data-x_margin="28"
      data-y_margin="18"
    ></script>
  ]);
};
