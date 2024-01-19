import React from "react";
import NextLink from "next/link";
import Text from "@src/compoents/Text"

interface LinkProps {
  children: React.ReactNode;
  href?: string;
}

export default function Link({ 
  children, 
  ...props 
}: LinkProps) {

  const linkProps = {
    children,
    ...props,
  }

  return (
    <Text tag="span" {...linkProps} />
  )
}
