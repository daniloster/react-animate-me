import React from 'react';

const { useState, useEffect } = React;

/**
 * Hook to indicate when the content has been updated
 * @param {React.Node} children - the content to be animated
 * @returns [shouldAnimate]
 * @ignore
 */
export default function useStartAnimateOnUpdate(initialContent) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [previousContent] = useState(initialContent);
  useEffect(
    () => {
      if (!shouldAnimate && initialContent !== previousContent) {
        setShouldAnimate(true);
      }
    },
    [initialContent]
  );

  return [shouldAnimate];
}
