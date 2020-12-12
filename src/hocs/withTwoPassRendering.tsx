// See also: https://github.com/gatsbyjs/gatsby/issues/17914

// Ext
import { useState, useEffect } from 'react'

/* eslint-disable react/display-name */
export default function withTwoPassRendering(WrappedComponent) {
  return ({
    children,
    ...rest
  }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, [setIsClient]);

    return (
      <WrappedComponent {...rest} key={isClient}>
        { children }
      </WrappedComponent>
    );
  };
}
