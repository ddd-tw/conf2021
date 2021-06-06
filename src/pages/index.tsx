import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Button } from "@material-ui/core";
import Layout from "@site/src/component/Layout";
import React from "react";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Button>test</Button>
    </Layout>
  );
}
