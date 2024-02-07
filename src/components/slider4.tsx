import * as React from "react"
import { Page } from "./Page"
import usePages from "./usePages"
import { transform } from "framer-motion"

export default function() {
  const pages = usePages(1, 5)

  return (
    <div className="example">
      <h1>Example Page Effect</h1>
      <Page
        style={{
          height: 320,
          width: 320
          // overflow: "visible"
        }}
        originX={0.5}
        gap={0}
        effect={({
          index,
          normalizedOffset,
          pageCount,
          direction,
          offset,
          size,
          gap
        }) => {
          return {
            style: {
              scale: 1 - Math.abs(normalizedOffset * 0.25)
            }
          }
        }}
      >
        {pages}
      </Page>
    </div>
  )
}
