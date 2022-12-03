import "./src/static/fonts/Inter/inter.css";
import "./src/static/fonts/Montserrat/montserrat.css";
import "./src/static/fonts/FiraCode/firaCode.css";
import "./src/styles/reset.css";
import Layout from "./src/components/Layout";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
