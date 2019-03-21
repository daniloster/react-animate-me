import React from 'react';
import uuid from 'uuid';

const { useState, useEffect } = React;

/**
 * Hook to return the children and a hash to force triggering
 * the animation
 * @param {React.Node} children - the content to be animated
 * @returns [hash, content]
 * @ignore
 */
export default function useAnimateOnChange(children) {
  const [hash, setHash] = useState(uuid.v4());
  const [previousChildren, setPreviousChildren] = useState(children);
  useEffect(
    () => {
      setHash(uuid.v4());
      setPreviousChildren(children);
    },
    [children]
  );

  return [hash, previousChildren];
}
